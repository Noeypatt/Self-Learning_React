import React from 'react';
import moment from 'moment';
// import 'moment/locale/th';
import { Jumbotron, Input, ListGroup, ListGroupItemHeading, ListGroupItem, ListGroupItemText, Button } from 'reactstrap';

import Cloudy from './image/cloudy.svg';

// moment.locale('th');

const Header = () => {

    const dataList = [
        {
            title: "Title",
            description: "description"
        },
        {
            title: "Title",
            description: "description"
        },
        {
            title: "Title",
            description: "description"
        },
        {
            title: "Title",
            description: "description"
        },
        {
            title: "Title",
            description: "description"
        }
    ]

    // const date = moment().add(543, 'year').format('LL')
    const date = moment().format('LL')


    return (
        <div className="warp-header">
            <div className="header-left-content">
                <Jumbotron>
                    <div className="header-title">
                        <div className="header-title-date">
                            <img src={Cloudy} alt="planet-earth" />
                            <h6> {date} </h6>
                        </div>
                        <div className="header-title-content">
                            <h3>Have you ever seen the orange clouds?</h3>
                            <p>orange clouds | blue sky</p>
                        </div>
                        <div className="header-title-btn">
                            <Button>Get start</Button>
                        </div>

                    </div>
                    <p></p>
                </Jumbotron>
                <div className="header-search">
                    <Input type="text" name="search" id="search" placeholder="Search" />
                </div>
            </div>
            <div className="header-right-content">
                {
                    dataList.map((item, index) => {
                        return (
                            <ListGroup key={index}>
                                <ListGroupItem>
                                    <ListGroupItemHeading>{item.title}</ListGroupItemHeading>
                                    <ListGroupItemText>
                                        <p>{item.description}</p>
                                    </ListGroupItemText>
                                </ListGroupItem>
                            </ListGroup>
                        )
                    })
                }

            </div>
        </div>
    )
}
export default Header;