import { Component, Inject, OnInit } from '@angular/core';
import { API_TOKEN } from '../api.token';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {

  constructor(@Inject(API_TOKEN) public apiToken: string) { }

  ngOnInit(): void {
  }

}
