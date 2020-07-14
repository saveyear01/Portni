import { Component, OnInit } from '@angular/core';

import { LoginForm } from '../../../commons/forms/auth.form';
import { Login } from '../../../commons/models/auth.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: LoginForm;

  constructor() { }

  ngOnInit(): void {
    this.form = new LoginForm(new Login())
  }

  onSubmit({value, valid}) {
    console.log(valid);
    if(valid) {
      // call the login service 
    }
  }

}
