import { Component, OnInit } from '@angular/core';
import { AbstractModal, MODAL_REF } from '../modal.token';

@Component({
  selector: 'app-modal-new',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [
    {
      provide: MODAL_REF,
      useExisting: NewModalComponent
    }
  ]
})
export class NewModalComponent implements OnInit, AbstractModal {

  isOpen = false;

  ngOnInit(): void {
  }

  open() {
    this.isOpen = true;
    alert('open');
  }

  close() {
    this.isOpen = false;
    alert('close');
  }

}
