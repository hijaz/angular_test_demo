import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-basic-hooks',
  templateUrl: './basic-hook.component.html',
  styleUrls: ['./basic-hook.component.css']
})
export class BasicHooksComponent implements OnInit {

  message: any;
  // @Input() username: any;
  // displayMsg: any;

  constructor(){}

  ngOnInit(): void {
    this.message = 'OnInit Hook:- ';
  }

}
