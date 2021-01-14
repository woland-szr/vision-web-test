import { GET_SUCCESS, GET_FAILURE, GET_REQUEST } from "./types"

const initialState = {
    data: {},
    isLoading: false,
    fail: false
}

export const getReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REQUEST:
            return { ...state, isLoading: true}
        case GET_SUCCESS:
            return { ...state, data: action.payload.data, fail: false, isLoading: false}
        case GET_FAILURE:
            return { ...state, fail: true, isLoading: false}
                
        default: return state
    }
}