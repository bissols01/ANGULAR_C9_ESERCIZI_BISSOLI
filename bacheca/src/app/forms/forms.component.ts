import { Component, OnInit } from '@angular/core';
import { fbind } from 'q';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
myForm: FormGroup;
  constructor(fb : FormBuilder) {
    this.myForm = fb.group({
      'NomeInput' : ['Name', Validators.required],
      'CognomeInput' : ['Surname', Validators.required],
      'UsernameInput' : ['Username', Validators.required],
      'EmailInput' : ['Email', Validators.required],
      'PasswordInput' : ['Password', Validators.required],
    });
  }




  ngOnInit() {
  }
onSubmit(value: string) : void{
  console.log('valori inseriti', value);
}
}
