import { Component, OnInit } from '@angular/core';

import { RegisterForm } from 'src/app/commons/forms/auth.form';
import { AuthService } from 'src/app/commons/services/auth.service';
import { Register } from 'src/app/commons/models/auth.models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: RegisterForm;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.form = new RegisterForm(new Register())
  }
  onSubmit({value, valid}) {
    if(valid) {
      // call the login service 
      this.authService.register(value)
      .then((resp) => {
        //redirect to dashboard page
        console.log('resp');
      })
      .catch((err) =>  {
        console.log(err.error)
        this.form.errors = err.error
      })
    }
  }
}
