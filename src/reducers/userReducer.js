import { UserConstants } from '../models/User/constants';

const initUser = {
    users: null,
    requested: false,
    error: false,
    ready: false
}

export default function userReducer(state = initUser, action) {
    switch (action.type) {
        case UserConstants.SET_USER_REQUEST:
            return {
                users: null,
                requested: true,
                error: false,
                ready: false
            }
        case UserConstants.SET_USER_ERROR:
            return {
                users: null,
                requested: false,
                error: true,
                ready: true
            }
        case UserConstants.SET_USER_SUCCESS:
            return {
                users: action.payload,
                requested: false,
                error: false,
                ready: true
            }
        default:
            return state
    }
}