import { AUTH_STATES } from "../../components/auth/auth.state";
import { BOARD_STATES } from "../../components/board/board.states";


export const APP_STATES = {
    otherwise : '/login',
    states: [].concat(
        AUTH_STATES,
        BOARD_STATES
    )
}