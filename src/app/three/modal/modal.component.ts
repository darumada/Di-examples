import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  open() {
    this.isOpen = true;
    console.log('open')
  }

  close() {
    this.isOpen = false;
    console.log('close')
  }

}
