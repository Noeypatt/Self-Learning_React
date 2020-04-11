import React from 'react'
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import Act from '../image/act1.jpg';
import Act2 from '../image/act2.jpg';


const Activitiy = () => {

    const data = [
        {
            img: Act,
            title: "Title",
            text: "Description",
            small: "smail text"
        },
        {
            img: Act2,
            title: "Title",
            text: "Description",
            small: "smail text"
        },
    ]
    return (
        <div className="warp-activitiy">
            <div className="activitiy-title">
                <h5>Activitiy</h5>
            </div>

            <div className="activitiy-content">
                {
                    data.map((item, index) => {
                        return (
                            <Card>
                                <CardImg top width="100%" src={item.img} alt={`img-${index}`} />
                                <CardBody>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardText>{item.text}</CardText>
                                    <CardText>
                                        <small className="text-muted">{item.small}</small>
                                    </CardText>
                                </CardBody>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Activitiy;