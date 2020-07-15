import { Component, OnInit } from '@angular/core';

import { LoginForm } from '../../../commons/forms/auth.form';
import { Login } from '../../../commons/models/auth.models';
import { AuthService } from '../../../commons/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: LoginForm;

  constructor(
    private AuthService: AuthService
  ) { }

  ngOnInit(): void {
    this.form = new LoginForm(new Login())
  }

  onSubmit({value, valid}) {

    if(valid) {
      // call the login service 
      this.AuthService.login(value)
      .then((resp) => {
        console.log(resp)
      })
      .catch((err) =>  {
        console.log(err.error)
        this.form.errors = err.error
      })
    }
  }

}
