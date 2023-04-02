import { myFunc } from "./spy";

describe('myFunc', function() {
    it('Expect callback to have been called with the correct params', function() {
      
      var callback = jasmine.createSpy('callback');

      myFunc(10, 2, callback);

      expect(callback).toHaveBeenCalledWith(10, 2);
    });

    it('Expect callback to have been called correct number of times', function() {
      
        var callback = jasmine.createSpy('callback');
  
        myFunc(1, 2, callback);
        myFunc(1, 2, callback);
        myFunc(1, 2, callback);
        myFunc(1, 2, callback);
  
        expect(callback).toHaveBeenCalledTimes(4);
      });
  });
