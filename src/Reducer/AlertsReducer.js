const initialState = {
    message: "",
    scroll: 0,
    alert: 0,
    formPost: false,
    delete: false
}

export const alertsReducer = (state = initialState, action) => {

    switch(action.type) {

        case '@user/scroll':
        return state, {
            ...state,
            scroll: action.payload
        }

        case '@user/message':  //change state depend the event active
        return state, {
            ...state,
            message: action.payload.message,
            alert: action.payload.alert
        }

        case '@users/close':
        return state, {
            ...state,
            alert: action.payload
        }

        case '@users/activeForm':
        return state, {
            ...state,
            formPost: !state.formPost
        }

        case '@users/activeDeletePost':
        return state, {
            ...state,
            delete: action.payload
        }

        default:
            return state
        }
    }

// funtions active the process according to case

export const scrollActive = (scrollval) => {
    return {
        type: '@user/scroll',
        payload: scrollval
    }
}

export const messageSelect = (alert , message) => {
    return {
        type: '@user/message',
        payload: {
            message,
            alert
        }
    }
}

export const closeAlert = (close) => {
    return {
        type :'@users/close',
        payload: close
    }
}

export const activeFormPost = () => {
    return {
        type :'@users/activeForm',
        payload: null
    }
}

export const activeDelete = (value) => {
    return {
        type :'@users/activeDeletePost',
        payload: value
    }
}
