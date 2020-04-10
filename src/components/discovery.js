import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setLike } from '../redux/discovery/action'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { Card, CardImg, CardText, CardBody, CardFooter, } from 'reactstrap';
import Dis from '../image/dis1.jpg'
import Dis2 from '../image/dis2.jpg'
import Dis3 from '../image/dis3.jpg'
import Dis4 from '../image/dis4.jpg'

const Discovery = () => {

    const like = useSelector(state => state.like)
    const action = bindActionCreators({ ...setLike }, useDispatch())

    console.log("Status: ", like.status);
    const data = [
        {
            img: Dis,
            location: "location detail",
            text: "Like",
            icon: "like",
            active: "likeActive"
        },
        {
            img: Dis2,
            location: "location detail",
            text: "Like",
            icon: "like",
            active: "likeActive"
        },
        {
            img: Dis3,
            location: "location detail",
            text: "Like",
            icon: "like",
            active: "likeActive"
        },
        {
            img: Dis4,
            location: "location detail",
            text: "Like",
            icon: "like",
            active: "likeActive"
        },
    ]

    return (
        <div className="warp-discovery">
            <div className="discovery-title">
                <h5>Discovery</h5>
                <p>View all<FontAwesomeIcon icon={faAngleRight} /></p>
            </div>

            <div className="discovery-content">
                {
                    data.map((item, index) => {
                        return (
                            <Card className="hvr-grow" key={index}>
                                <CardImg top width="100%" src={item.img} alt={`Img-${index}`} />
                                <CardBody>
                                    <CardText>{item.location}</CardText>
                                </CardBody>
                                <CardFooter className="text-muted">
                                    <CardText href="#">{like.count} {item.text}</CardText>
                                    <span className={`icon icon-${!like.status ? item.icon : item.active}`}
                                        onClick={
                                            !like.status ?
                                                action.like
                                                :
                                                action.unLike
                                        }></span>

                                </CardFooter>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Discovery;