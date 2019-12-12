import axios from '../../axiosUrl';
import * as actionTypes from './actionTypes';

// Set User Data to reducer
export const setUserData = (user) => {
    return {
        type: actionTypes.SET_USER_DATA,
        user: user
    }
}

// Set Errors Data to reducer
export const setErrors = (errors) => {
    return {
        type: actionTypes.SET_AUTH_ERRORS,
        errors: errors
    }
}

// Set Auth redirection page
export const setAuthredirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}

// Logout - Remove token and UserInfo
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

// Set Token to reducer
export const setToken = (token) => {
    return {
        type: actionTypes.SET_TOKEN,
        token: token
    }
}

export const Login = (email, password) => {
    return dispatch => {
        const param = {"email": email, "password": password};
        return axios.post('api/v1/login', param, {headers: {'Content-Type': 'application/json'}}).then(res => {
            if (res.data.status === "true") {
                dispatch(setUserData(res.data.data)); // Set User Data to Reducer
                dispatch(setToken(res.data.data.token)); // Set Token to Reducer
                dispatch(setErrors("")); // Set Error to blank because of success
                localStorage.setItem('token', res.data.data.token); // Set Token to Local Storage for feture use.
                localStorage.setItem('userInfo', JSON.stringify(res.data.data)); // Set User Info to LocalStorage for Future Use.
                dispatch(setAuthredirectPath('/dashboard')); // Redirect to Dashboard
            } else {
                dispatch(setErrors(res.data.messages)); // Set Error Message if Email/Password Wrong.
            }
            return res.data.data;
        }).catch(err => {
            console.log(err.response);
            dispatch(setErrors(err.response));
            return {};
        });
    }
}
