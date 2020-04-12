
export const setLike = {

    like: () => (dispatch, getState) => {
        let count = getState().like.count
        dispatch({
            type: 'SET_LIKE',
            payload: {
                count: count + 1,
                status: true
            }
        })
    },
    unLike: () => (dispatch, getState) => {
        let count = getState().like.count
        dispatch({
            type: 'SET_LIKE',
            payload: {
                count: count - 1,
                status: false
            }
        })
    }

}



