import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;
	let de: DebugElement;
	beforeEach(async () => {
    		await TestBed.configureTestingModule({
      			declarations: [ HomeComponent ]
    		})
    		.compileComponents();
    		fixture = TestBed.createComponent(HomeComponent);
    		component = fixture.componentInstance;
    		fixture.detectChanges();
    		de = fixture.debugElement;

        fixture.detectChanges();
  	});

	it('Testing <p> Component', () => {
    		let pElements = de.queryAll(By.css('p'));
    		expect(pElements[0].nativeElement.textContent).toBe('home works!');
  });

  it('Testing button Component', () => {
      let buttonElements = de.queryAll(By.css('.btn'));
      expect(buttonElements[0].nativeElement.disabled).toBeTrue();
  });

  it('Testing Image Component', () => {
      let imgElements = de.queryAll(By.css('img'));
      expect(imgElements[0].nativeElement.src).toBe('http://homeimage.com/home');
  });
  
  it('Testing changeable Component', () => {
      component.title = "Angular testing for components";
      fixture.detectChanges();
      let textElements = de.queryAll(By.css('.title'));
      expect(textElements[0].nativeElement.textContent).toBe('Angular testing for components');
  })
});
