import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { InteractiveComponent } from './interactive.component';

describe('InteractiveComponent', () => {
  let component: InteractiveComponent;
  let fixture: ComponentFixture<InteractiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const element = fixture.nativeElement;
    const h2 = element.querySelector('h2');
    expect(h2.innerText).toContain('Example Interactive Component Test');
  });

  it('should not show the description on initial render', () => {
    const description = fixture.debugElement.query(By.css('p'));
    expect(description).toBeFalsy();
  });

  it('should show the description if the button is clicked', () => {
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    const description = fixture.debugElement.query(By.css('p'));
    expect(description).toBeTruthy();
    expect(description.nativeElement.textContent).toContain('Some description text');
  });
});
