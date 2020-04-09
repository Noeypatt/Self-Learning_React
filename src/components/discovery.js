import React, { useState } from 'react'
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardFooter, CardSubtitle
} from 'reactstrap';

import Dis from '../image/dis1.jpg'
import Dis2 from '../image/dis2.jpg'
import Dis3 from '../image/dis3.jpg'
import Dis4 from '../image/dis4.jpg'

const Discovery = () => {

    const data = [
        {
            img: Dis,
            location: "location detail",
            text: "Like",
            icon: "like"
        },
        {
            img: Dis2,
            location: "location detail",
            text: "Like",
            icon: "like"
        },
        {
            img: Dis3,
            location: "location detail",
            text: "Like",
            icon: "like"
        },
        {
            img: Dis4,
            location: "location detail",
            text: "Like",
            icon: "like"
        },
    ]
    return (
        <div className="warp-discovery">
            <h5>Discovery</h5>
            <div className="discovery-content">
                {
                    data.map((item, index) => {
                        return (
                            <Card className="hvr-grow">
                                <CardImg top width="100%" src={item.img} alt={`Img-${index}`} />
                                <CardBody>
                                    <CardText>{item.location}</CardText>
                                </CardBody>
                                <CardFooter className="text-muted">
                                    <CardText href="#">{item.text}</CardText>
                                    <span class={`icon icon-${item.icon}`}></span>
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