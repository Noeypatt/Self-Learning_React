import Dis from '../../image/dis1.jpg'
import Dis2 from '../../image/dis2.jpg'
import Dis3 from '../../image/dis3.jpg'
import Dis4 from '../../image/dis4.jpg'

const data = {
    card: [
        {
            id: 1,
            img: Dis,
            location: "location detail",
            icon: "like",
            active: "likeActive",
            status: false,
            count: 0
        },
        {
            id: 2,
            img: Dis2,
            location: "location detail",
            icon: "like",
            active: "likeActive",
            status: false,
            count: 0
        },
        {
            id: 3,
            img: Dis3,
            location: "location detail",
            icon: "like",
            active: "likeActive",
            status: false,
            count: 0
        },
        {
            id: 4,
            img: Dis4,
            location: "location detail",
            icon: "like",
            active: "likeActive",
            status: false,
            count: 0
        },
    ],
    cardTotal: [],
    count: 0,
    status: false,

}

export const cardReducer = (state = data, action) => {
    switch (action.type) {
        case 'SET_LIKE':
            {
                let cardToggleLike = state.card.find(item => item.id === action.id)
                console.log("cardToggleLike: ", cardToggleLike.id);

                return state = {
                    ...state,
                    card: state.card.map(item => item.id === cardToggleLike.id && !cardToggleLike.status ? { ...item, status: true, count: item.count + 1 } : { ...item, status: false, count: item.count = 0 }),
                }

            }

        default:
            return state
    }
} 