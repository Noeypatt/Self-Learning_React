export const setLike = {
    add: () => (dispatch, getState) => {
        let count = getState().like.count
        dispatch({ type: 'SET_LIKE', payload: count + 1 })
    },

}



