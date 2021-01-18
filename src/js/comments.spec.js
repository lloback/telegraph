import "regenerator-runtime/runtime.js";
import Comments from './comments';

// TODO - test coverage for the HTML / DOM, including buttons and text


describe( 'Comments', () => {

  describe( 'init', () => {
    it("not to throw error", () => {
      expect(() => Comments.init()).not.toThrow(); 
    });
  });

  describe( 'commentsData', () => {
    const dataToReturn = JSON.parse('[{"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed gravida orci.", "date": "2019-04-23T22:26:43.511Z", "id": 1, "likes": 33, "name": "Dawud Esparza"}, {"body": "Quisque maximus augue ut ex tincidunt sodales. Nullam interdum consectetur mi at pellentesque.", "date": "2019-04-23T19:26:41.511Z", "id": 2, "likes": 4, "name": "Lennie Wainwright"}, {"body": "Nam sit amet diam rutrum, venenatis est ac, tempus massa. Etiam tempus libero sit amet bibendum lacinia. Quisque ligula dolor, venenatis quis urna non, tristique laoreet erat.", "date": "2019-04-23T18:26:48.511Z", "id": 3, "likes": 58, "name": "Mindy Sykes"}, {"body": "Vivamus sit amet turpis nulla. Mauris rhoncus nulla in lobortis rhoncus.", "date": "2019-04-24T08:23:49.511Z", "id": 4, "likes": 91, "name": "Arianne Ashton"}, {"body": "Mauris ut dolor ipsum. Phasellus imperdiet massa a dui imperdiet dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.", "date": "2019-04-24T07:26:42.511Z", "id": 5, "likes": 7, "name": "Courteney Moreno"}]');
    it("not to throw error", () => {
      expect(() => Comments.commentsData()).not.toThrow(); 
    });
    test('are not the exact same data', () => {
      return Comments.commentsData().then(data => {
        expect(data).not.toBe(dataToReturn);
      });
    });
    test('have similar content', () => {
      return Comments.commentsData().then(data => {
        expect(data).toEqual(dataToReturn);
      });
    });
  });

  describe( 'makeRequest', () => {
    it("not to throw error", () => {
      expect(() => Comments.makeRequest()).not.toThrow(); 
    });
  });

  describe( 'countArr', () => {
    const myArray = [0,1,2,3];
    it("to return the lenght of the Array", () => {
      expect(Comments.countArr(myArray)).toBe(4); 
    });
    it("to return 0 as the lenght of the Array if array is null", () => {
      expect(Comments.countArr(null)).toBe(0); 
    });
    it("to return 0 as the lenght of the Array if array is empty", () => {
      expect(Comments.countArr(null)).toBe(0); 
    });
  });

  describe( 'populateCount', () => {
    it("not to throw error", () => {
      expect(() => Comments.populateCount()).not.toThrow(); 
    });
  });

  describe( 'populateData', () => {
    it("not to throw error", () => {
      expect(() => Comments.populateData()).not.toThrow(); 
    });
  });

  describe( 'orderData', () => {
    it("not to throw error", () => {
      expect(() => Comments.orderData()).not.toThrow(); 
    });
  });

  describe( 'compareDate', () => {
    const date1 = { "date": '2019-04-23T19:26:41.511Z' };
    const date2 = { "date": '2019-04-24T07:26:42.511Z' };
    it("not to throw error", () => {
      expect(() => Comments.compareDate(date1, date2)).not.toThrow(); 
    });
    it("null value does not throw error", () => {
      expect(() => Comments.compareDate(null, null)).not.toThrow(); 
    });
    it("date to be smaller", () => {
      expect(Comments.compareDate(date1, date2)).toBe(1); 
    });
    it("date to be bigger", () => {
      expect(Comments.compareDate(date2, date1)).toBe(-1); 
    });
    it("empty values to return zero", () => {
      expect(Comments.compareDate('', '')).toBe(0); 
    });
    it("null values to return zero", () => {
      expect(Comments.compareDate(null, null)).toBe(0); 
    });
  });

  describe( 'compareLikes', () => {
    const likes1 = { "likes": 45 };
    const likes2 = { "likes": 3 };
    it("not to throw error", () => {
      expect(() => Comments.compareLikes(likes1, likes2)).not.toThrow(); 
    });
    it("null value does not throw error", () => {
      expect(() => Comments.compareLikes(null, null)).not.toThrow(); 
    });
    it("number comparison to be smaller", () => {
      expect(Comments.compareLikes(likes1, likes2)).toBe(-1); 
    });
    it("number comparison to be bigger", () => {
      expect(Comments.compareLikes(likes2, likes1)).toBe(1); 
    });
    it("empty values to return zero", () => {
      expect(Comments.compareLikes('', '')).toBe(0); 
    });
    it("string value to return zero", () => {
      expect(Comments.compareLikes('1', '2')).toBe(0); 
    });
    it("null values to return zero", () => {
      expect(Comments.compareLikes(null, null)).toBe(0); 
    });
  });

  describe( 'addSortButtonListeners', () => {
    it("not to throw error", () => {
      expect(() => Comments.addSortButtonListeners()).not.toThrow(); 
    });
  });

});
