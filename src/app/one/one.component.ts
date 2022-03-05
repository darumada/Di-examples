import { Component, Inject, OnInit } from '@angular/core';
import { API_TOKEN } from './api.token';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(@Inject(API_TOKEN) public apiToken: string) { }

  ngOnInit(): void {
  }

}
