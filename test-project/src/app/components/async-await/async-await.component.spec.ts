import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AsyncAwaitComponent } from './async-await.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AsyncAwaitComponent', () => {
  let fixture: ComponentFixture<AsyncAwaitComponent>;
  let de: DebugElement;
  let component: AsyncAwaitComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AsyncAwaitComponent
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AsyncAwaitComponent);
      de = fixture.debugElement;
      component = fixture.componentInstance;
    });

    fixture.detectChanges();
  });

  it('testing button with text', () => {
    component.isSubscribed = false;
    const btnElements = de.queryAll(By.css('.subscribe'));
    expect(btnElements[0].nativeElement.textContent).toBe("Subscribe");
    expect(btnElements[0].nativeElement.disabled).toBeFalse();
  });

  it('testing button with text with disable funtion', fakeAsync(() => {
    component.isSubscribed = false;
    fixture.detectChanges();
    let btnElements = de.queryAll(By.css('.subscribe'));
    btnElements[0].nativeElement.click();

    tick(3000);

    fixture.detectChanges();
    btnElements = de.queryAll(By.css('.subscribe'));
    expect(btnElements[0].nativeElement.textContent).toBe("Subscribed");
    expect(btnElements[0].nativeElement.disabled).toBeFalse();
  }));

});
