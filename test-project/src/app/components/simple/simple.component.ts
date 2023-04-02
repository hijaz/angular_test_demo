import { Component } from '@angular/core';

@Component({
  selector: 'app-simple',
  template: `<p>{{ text }}</p>`
})
export class SimpleComponent {
  text = 'This is a simple component.'
}
