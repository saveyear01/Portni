import {
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';

export class LoginForm {
    public form: FormGroup;

    constructor(data) {
        this.form = new FormBuilder().group({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        })
    }
}