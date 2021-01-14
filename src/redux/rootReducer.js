import { combineReducers } from 'redux';
import { signupReducer } from './signupReducer'
import { loginReducer } from './loginReducer'
import { getReducer } from './getReducer'

export const rootReducer = combineReducers({
    signup: signupReducer,
    login: loginReducer,
    get: getReducer
})