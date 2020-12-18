export const ADD_NOTIF = 'ADD_NOTIF';
export const REMOVE_TOKEN ='REMOVE_TOKEN'

export const createNotif = (token) => {
    return async dispatch => {
        let tokens = [];
        tokens.push(token)

        dispatch( {type:ADD_NOTIF,tokens:tokens })
    }
}

