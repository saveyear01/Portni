import { AUTH_STATES } from "../../components/auth/auth.state";


export const APP_STATES = {
    otherwise : '/login',
    states: [].concat(
        AUTH_STATES
    )
}