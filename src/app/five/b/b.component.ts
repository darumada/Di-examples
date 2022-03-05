import { Component, OnInit } from '@angular/core';
import { CHILD_COMP } from '../child.token';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
  providers: [
    {
      provide: CHILD_COMP,
      useExisting: BComponent
    }
  ]
})
export class BComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
