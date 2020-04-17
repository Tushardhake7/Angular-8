import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  //public name : string="";

  get name() {
    return this.myform.get('name');
  }

  myform = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
    DOB: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl('')
    }),
  });

  constructor() { }

  ngOnInit(): void {
  }

  myfun(myform: any) {
    //this.name = myform.controls.name.value;
    console.log(myform.controls);
    
  }

}
