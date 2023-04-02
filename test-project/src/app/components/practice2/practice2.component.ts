import { Component } from '@angular/core';

@Component({
  selector: 'app-practice2',
  template: `<div class="content">
    <span>{{ title }} app is running!</span>
  </div>`
})
export class Practice2Component {
  title = 'angularexamples';
}
