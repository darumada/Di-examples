import { Component, OnInit } from '@angular/core';
import { SharedComponentService } from './shared-component.service';

@Component({
  selector: 'app-shared-component',
  templateUrl: './shared-component.component.html',
  styleUrls: ['./shared-component.component.css']
})
export class SharedComponentComponent implements OnInit {

  constructor(public service: SharedComponentService) { }

  ngOnInit(): void {
  }

}
