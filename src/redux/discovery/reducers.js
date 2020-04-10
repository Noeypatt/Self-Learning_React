const like = {
    count: 0,
    status: false
}

export const likeReducer = (state = like, action) => {
    switch (action.type) {
        case 'SET_LIKE':
            return state = { ...state, count: action.payload, status: action.payload2 }

        default:
            return state
    }
} 