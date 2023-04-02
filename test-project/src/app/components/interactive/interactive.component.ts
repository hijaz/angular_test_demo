import { Component } from '@angular/core';

@Component({
  selector: 'app-interactive',
  template: `
    <div>
      <h2>{{title}}</h2>
      <button (click)="onButtonClick()">Toggle Description</button>
      <p *ngIf="showDescription">{{description}}</p>
    </div>
  `
})
export class InteractiveComponent {
  title = 'Example Interactive Component Test';
  description = 'Some description text';
  showDescription = false;

  onButtonClick(){
    this.showDescription = !this.showDescription;
  }

}
