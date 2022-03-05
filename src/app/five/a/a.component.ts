import { Component, OnInit } from '@angular/core';
import { CHILD_COMP } from '../child.token';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
  providers: [
    {
      provide: CHILD_COMP,
      useExisting: AComponent
    }
  ]
})
export class AComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
