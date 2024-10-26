import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-registration',
  templateUrl:'./registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdformGroup!: FormGroup;
  // FourthformGroup!: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void{
      this.firstFormGroup = this.fb.group({
        studentID: ['', [Validators.required]],
        appDate: ['', [Validators.required]],
        firstName: ['', [Validators.required]],
        middleName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        f_firstName: ['', [Validators.required]],
        f_middleName: ['', [Validators.required]],
        f_lastName: ['', [Validators.required]],
        dob: ['', [Validators.required]],
        email: ['', [Validators.required]],
        address: ['', [Validators.required]],
        income: ['', [Validators.required]],
        p_contact: ['', [Validators.required]],
        phoneNumber: ['', [Validators.required]],
    });
    

      this.secondFormGroup = this.fb.group({
        Degree: ['', [Validators.required]],
        Collegename: ['', [Validators.required]],
        Year: ['', [Validators.required]],
        Percentage: ['', [Validators.required]]
      }); 
  

    this.thirdformGroup = this.fb.group({
    studentsign: ['', [Validators.required]],
    Parentsign: ['', [Validators.required]]
    });

    // this.FourthformGroup = this.fb.group({
    //   button:['',[Validators.required]]

    // });
    

  
    }
}