import { UserConstants } from './constants';

function fetchUserRequest() {
    return {
        type: UserConstants.SET_USER_REQUEST
    }
}

function fetchUserSuccess(users) {
    return {
        type: UserConstants.SET_USER_SUCCESS,
        payload: users
    }
}

function fetchUserError(error) {
    return {
        type: UserConstants.SET_USER_ERROR
    }
}

function fetchUsers() {
    return (dispatch, getState) => {
        dispatch(fetchUserRequest())
        fetch('https://randomuser.me/api/?results=20')
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error)
                }
                dispatch(fetchUserSuccess(res.results))
                return res.results
            })
            .catch(error => {
                dispatch(fetchUserError())
            })
    }
}

export const UserActions = {
    fetchUsers
} 