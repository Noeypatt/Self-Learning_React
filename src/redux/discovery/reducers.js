const like = {
    count: 0,
}

export const likeReducer = (state = like, action) => {
    switch (action.type) {
        case 'SET_LIKE':
            return state = { ...state, count: action.payload }

        default:
            return state
    }
} 