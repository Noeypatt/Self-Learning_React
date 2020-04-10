export const setLike = {
    like: (status) => (dispatch, getState) => {
        let count = getState().like.count
        dispatch({ type: 'SET_LIKE', payload: count + 1, payload2: status = true })
    },
    unLike: (status) => (dispatch, getState) => {
        let count = getState().like.count
        dispatch({ type: 'SET_LIKE', payload: count - 1, payload2: status = false })
    }

}



