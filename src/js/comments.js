 const comments = {

  init: function () {
    console.log('app started');
    // Assynchronous call
    this.commentsData().then(val => {
      this.jsonData = val;
      // initial render without sorting
      this.populateData('none');
      this.populateCount();
      this.addSortButtonListeners();
    });
  },

  commentsData: async function () {
    let result = await this.makeRequest('GET', 'https://my-json-server.typicode.com/telegraph/front-end-exercise-contractors/comments');
    result = JSON.parse(result);
    return result;
  },

  makeRequest: function (method, url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
  },

  countArr: function (obj) {
    let returnValue = 0;
    if (obj) {
      returnValue = obj.length;
    }
    return returnValue;
  },

  populateCount: function () {
    const counterElement  = document.getElementById('js_amount_comments');
    if (counterElement) {
      counterElement.innerHTML = this.countArr(this.jsonData);
    }
  },

  populateData: function (ordering) {
    console.log('populateData', ordering);
    const jsonToUse = this.orderData(this.jsonData, ordering);
    let elComments = document.getElementById('js_comments');
    if (elComments) {
      elComments.innerHTML = '';
      jsonToUse.forEach(element => {
        // TODO - format the date properly as per the design
        const theDate = new Date(element.date).toLocaleString('en-GB');
        const template = `
          <div class="comment">
            <div class="comment-header">
              <div>
                <span class="comment-username font-main">${element.name}</span><span class="comment-header-date">${theDate}</span>
              </div>
              <div class="comment-header-likes">
                ${element.likes} likes
              </div>
            </div>
            <div class="comment-body">
            ${element.body}
            </div>
          </div>
        `;
        elComments.insertAdjacentHTML('beforeend', template);
      });
    }
  },

  orderData: function(obj, order) {
    let objToReturn = obj;
    if (order === 'likes') {
      objToReturn = obj.sort(this.compareLikes);
    }
    if (order === 'dates') {
      objToReturn = obj.sort(this.compareDate);
    }
    return objToReturn;
  },

  compareDate: function (a, b) {
    let comparison = 0;
    if (a && b) { 
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (dateA < dateB) {
        comparison = 1;
      } else if (dateA > dateB) {
        comparison = -1;
      }
    }
    return comparison;
  },

  compareLikes: function (a, b) {
    let comparison = 0;
    if (a && b) { 
      if (a.likes < b.likes) {
        comparison = 1;
      } else if (a.likes > b.likes) {
        comparison = -1;
      }
    }
    return comparison;
  },

  addSortButtonListeners: function() {
    console.log('added addSortButtonListeners');
    // Add event listener to sort by LIKES
    const elLike = document.getElementById("js_btn_likes");
    if (elLike) {
      elLike.addEventListener("click", () => this.populateData('likes'), false);
    }
    // Add event listener to sort by DATE
    const elDate = document.getElementById("js_btn_date");
    if (elDate) {
      elDate.addEventListener("click", () => this.populateData('dates'), false);
    }
  }
}

export default comments;
