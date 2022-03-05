import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CHILD_COMP } from './child.token';

//

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit, AfterViewInit {

  @ViewChildren(CHILD_COMP) children!: QueryList<any>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log(this.children);
  }

}
