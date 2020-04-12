const like = {
    id: 0,
    count: 0,
    status: false,
}

export const likeReducer = (state = like, action) => {
    switch (action.type) {
        case 'SET_LIKE':
            {
                return state = { ...state, count: action.payload.count, status: action.payload.status }
            }

        default:
            return state
    }
} 