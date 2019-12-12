import * as actionType from '../actions/actionTypes';

const initialState={
    userInfo: {},
    errors: "",
    authRedirectPath: '/',
    token: null,
}

// Set User Data to state
const setUserData = (state, action) => {
    return {
        ...state,
        userInfo: action.user,
    }
}

// Set Errors to state
const setErrors = (state, action) => {
    return {
        ...state,
        errors: action.errors,
    }
}

// Set Auth Redirection Path to state
const setAuthredirectPath = (state, action) => {
    return {
        ...state,
        authRedirectPath: action.path,
    }
}

// Set Auth Logout token to null in state
const authLogout = (state, action) => {
    return {
        ...state,
        userInfo: {},
        token: null
    }
}

// Set Auth Token to state
const setToken = (state, action) => {
    return {
        ...state,
        token: action.token,
    }
}

// Reducer Case
const reducer = (state=initialState, action) => {
    switch (action.type){
        case actionType.SET_USER_DATA:
            return setUserData(state, action);
        case actionType.SET_AUTH_ERRORS:
            return setErrors(state, action);
        case actionType.SET_AUTH_REDIRECT_PATH:
            return setAuthredirectPath(state, action);
        case actionType.AUTH_LOGOUT:
            return authLogout(state, action);
        case actionType.SET_TOKEN:
            return setToken(state, action);
        default:
            return state
    }
}

export default reducer;
