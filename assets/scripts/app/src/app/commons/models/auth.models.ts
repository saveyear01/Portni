export class Login {
    email: string = null;
    password: string = null;

    constructor(data = {}) {
        Object.assign(this, data);
    }
}

export class Register {
    email: string = null;
    username: string = null;
    first_name: string = null;
    last_name: string = null;
    password: string = null;

    constructor(data = {}) {
        Object.assign(this, data);
    }
}