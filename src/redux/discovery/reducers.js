const discovery = {
    count: 0,
    id: false
}


const Like = (state = discovery, action) => {
    switch (action.type) {
        case 'ADD_LIKE':
            return { ...state, count: state.count + 1 }
        // return { ...state, count: state.count + 1,id: action.id }

        default:
            return state
    }
}

export default Like