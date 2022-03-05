import { Component, Inject, OnInit } from '@angular/core';
import { AbstractModal, MODAL_REF } from '../modal.token';

@Component({
  selector: 'app-modal-content2',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {

  constructor(@Inject(MODAL_REF) public modal: AbstractModal) { }

  ngOnInit(): void {
  }

}
