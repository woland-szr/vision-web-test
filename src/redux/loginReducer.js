import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST } from "./types"

const initialState = {
    auth: false,
    request: false
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, request: true }
        case LOGIN_SUCCESS:
            return { auth: true, request: false }
        case LOGIN_FAILURE:
            return { auth: false, request: false }
                
        default: return state
    }
}