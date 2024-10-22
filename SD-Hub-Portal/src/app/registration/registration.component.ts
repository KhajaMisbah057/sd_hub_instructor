import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './ '
})
export class RegistrationComponent implements OnInit {
  isLinear = false;
  firstFormGroup!:FormGroup;
  secondFormGroup!:FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
}
