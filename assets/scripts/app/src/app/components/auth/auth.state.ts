import { ContentOnly } from "./../../commons/utils/layout.utils";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

export const AUTH_STATES: object[] = [
    {
        name: 'login',
        url: '/login',
        views: ContentOnly(LoginComponent) 
    },
    {
        name: 'register',
        url: '/register',
        views: ContentOnly(RegisterComponent) 
    }
];