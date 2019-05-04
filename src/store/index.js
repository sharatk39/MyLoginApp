import { createStore } from 'redux';

const initialState = {
    loggedIn: false
}
const reducer = async (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS': {
            return { loggedIn: true }
        }
        case 'LOGOUT': {
            return { loggedIn: false }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export const store = createStore(reducer);