import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {

  constructor(public modal: ModalComponent) { }

  ngOnInit(): void {
  }

}
