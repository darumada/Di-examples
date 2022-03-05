import { Component, OnInit } from '@angular/core';
import { AbstractModal, MODAL_REF } from '../modal.token';

@Component({
  selector: 'app-modal2',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [
    {
      provide: MODAL_REF,
      useExisting: ModalComponent
    }
  ]
})
export class ModalComponent implements OnInit, AbstractModal {

  isOpen = false;

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
