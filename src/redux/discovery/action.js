
export const setLike = {

    like: (id) => (dispatch, getState) => {
        dispatch({
            type: 'SET_LIKE',
            id

        })
    },
    unLike: (id) => (dispatch, getState) => {
        dispatch({
            type: 'SET_LIKE',
            id
        })
    }

}



