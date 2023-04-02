import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BasicHooksComponent } from './basic-hook.component';

describe('BasicHooksComponent', () => {
  let component: BasicHooksComponent;
  let fixture: ComponentFixture<BasicHooksComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicHooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicHooksComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  it('Test OnInit Hook', () => {
    expect(component.message).toContain('OnInit Hook:- ');
  });

});
