import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-fb',
  templateUrl: './reactive-fb.component.html',
  styleUrls: ['./reactive-fb.component.css']
})
export class ReactiveFbComponent implements OnInit {

  myFBFormGroup: FormGroup;
  nameControl: FormControl;

  constructor(private fb: FormBuilder) {
    this.nameControl = new FormControl('', [Validators.maxLength(20)]);
    this.myFBFormGroup = this.fb.group({
      name: this.nameControl,
      age: [0, [this.ageValidator, Validators.minLength(1)]],

      fullName: this.fb.group({
        firstName: '',
        lastName: ''
      }, {validator: this.fullNameValidator})
    });
  }

  ngOnInit() {
  }

  ageValidator(control: FormControl) {
    const {value} = control;
    const valid = value >= 0 && value <= 200;
    return valid ? null : {age: {actualAge: value, requiredAge: '0-200'}};
  }

  fullNameValidator({value}: FormGroup) {
    const {firstName, lastName} = value;
    return firstName.length > 3 && lastName.length > 1 ? null : {fullName: 'not valid'};
  }

  onSubmit() {
    console.log(this.myFBFormGroup.value);
    console.log(this.myFBFormGroup.status);



  }
}
