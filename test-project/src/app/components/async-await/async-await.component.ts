import { Component } from '@angular/core';
@Component({
  selector: 'app-async',
  templateUrl: './async-await.component.html',
  // styleUrls: ['./app.component.css']
})
export class AsyncAwaitComponent {
  title = "Testing";
  btnText = "Subscribe";
  isSubscribed = false;
  
  subscribe(){
    setTimeout(() => {
      this.isSubscribed = true;
      this.btnText = "Subscribed";
    }, 3000);
  }
}
