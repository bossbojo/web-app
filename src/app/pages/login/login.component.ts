import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private build: FormBuilder) {
    this.form = this.build.group({
      username : ['', [Validators.required]],
      password : ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

}
