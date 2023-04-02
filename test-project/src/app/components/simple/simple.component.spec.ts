import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent } from './simple.component';

describe('SimpleComponent', () => {
  let component: SimpleComponent;
  let fixture: ComponentFixture<SimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show correct text', () => {
    const element = fixture.nativeElement;
    const pElement = element.querySelector('p');
    const pElementText = pElement.textContent;
    expect(pElementText).toContain('This is a simple component.');
  });

});
