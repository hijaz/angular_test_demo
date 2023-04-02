import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Practice2Component } from './practice2.component';

describe('Practice2Component', () => {
	console.log("This is describe funtion.")

	beforeAll(()=>{
    		console.log("This is beforeAll funtion.")
  	});

  	afterAll(()=>{
    		console.log("This is afterAll funtion.")
  	});

  	afterEach(()=>{
    		console.log("This is afterEach funtion.")
  	});

  	beforeEach(async () => {
      console.log("This is the beforeEach function")
    		await TestBed.configureTestingModule({
      			imports: [ RouterTestingModule ],
      			declarations: [ Practice2Component ],
    		}).compileComponents();
  	});

	it('should create the app', () => {
    		console.log("This is first it funtion.")
    		const fixture = TestBed.createComponent(Practice2Component);
    		const app = fixture.componentInstance;
    		expect(app).toBeTruthy();
  	});

  	it(`should have as title 'angularexamples'`, () => {
    		console.log("This is second it funtion.")
    		const fixture = TestBed.createComponent(Practice2Component);
    		const app = fixture.componentInstance;
    		expect(app.title).toEqual('angularexamples');
  	});

  	it('should render title', () => {
    		console.log("This is third it funtion.")
    		const fixture = TestBed.createComponent(Practice2Component);
    		fixture.detectChanges();
    		const compiled = fixture.nativeElement as HTMLElement;
    		expect(compiled.querySelector('.content span')?.textContent).toContain('angularexamples app is running!');
  	});
});
