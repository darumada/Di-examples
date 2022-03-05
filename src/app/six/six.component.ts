import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.css']
})
export class SixComponent implements OnInit {

  options = of([
    {
      label: 'Option 1',
      value: 1
    },
    {
      label: 'Option 2',
      value: 2
    }
  ]);

  nameErrorMessages = {
    maxlength: 'Максимальная длина 10 символов'
  }

  form = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
    option: new FormControl(null, Validators.required),
    date: new FormControl(null, Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

}
