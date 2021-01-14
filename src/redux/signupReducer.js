import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "./types"

const initialState = {
    request: false,
    success: false
}

export const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return { ...state, request: true }
        case SIGNUP_SUCCESS:
            return { ...state, success: true, request: false }
        case SIGNUP_FAILURE:
            return { ...state, success: false, request: false }
                
        default: return state
    }
}