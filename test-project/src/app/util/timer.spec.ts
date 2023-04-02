// import { TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';
import { Timer } from './timer';

describe('Timer', () => {
  const startingTime = Date.now();

  beforeEach(() => {
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(startingTime));
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it("should return decremented duration as time passes", () => {
    const timer = new Timer(12, true);
  
    jasmine.clock().mockDate(new Date(startingTime + 100));
  
    expect(timer.secondsRemaining).toBe(11);
  });
})
