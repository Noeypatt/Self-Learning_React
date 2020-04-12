import React from 'react';
import moment from 'moment';
import { useMediaQuery } from 'react-responsive'
// import 'moment/locale/th';
import { Jumbotron, Input, ListGroup, ListGroupItemHeading, ListGroupItem, ListGroupItemText, Button } from 'reactstrap';

import Cloudy from './image/cloudy.svg';

// moment.locale('th');

const Header = () => {

    const date = moment().format('LL')
    const isIpad = useMediaQuery({ maxWidth: 1024 })
    const isIpadMini = useMediaQuery({ maxWidth: 768 })
    const isMobile = useMediaQuery({ maxWidth: 576 })

    const dataList = [
        {
            delay: 0,
            title: "Title",
            description: "description"
        },
        {
            delay: 1,
            title: "Title",
            description: "description"
        },
        {
            delay: 2,
            title: "Title",
            description: "description"
        },
        {
            delay: 3,
            title: "Title",
            description: "description"
        },
        {
            delay: 4,
            title: "Title",
            description: "description"
        }
    ]

    // const date = moment().add(543, 'year').format('LL')



    return (
        <React.Fragment>
            {
                isMobile ?
                    <div className="warp-header">
                        <div className="header-left-content">
                            <Jumbotron>
                                <div className="header-title">
                                    <div className="header-title-date">
                                        <img src={Cloudy} alt="planet-earth" />
                                        <h6> {date} </h6>
                                    </div>
                                    <div className="header-title-content">
                                        <h6>Have you ever seen the orange clouds?</h6>
                                        <p>orange clouds | blue sky</p>
                                    </div>
                                    <div className="header-title-btn">
                                        <Button>Get start</Button>
                                    </div>
                                </div>
                            </Jumbotron>
                            <div className="header-search">
                                <Input type="text" name="search" id="search" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                    :
                    isIpadMini ?
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
                                </Jumbotron>
                                <div className="header-search">
                                    <Input type="text" name="search" id="search" placeholder="Search" />
                                </div>
                            </div>
                        </div>
                        :
                        isIpad ?
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
                                    </Jumbotron>
                                    <div className="header-search">
                                        <Input type="text" name="search" id="search" placeholder="Search" />
                                    </div>
                                </div>
                                <div className="header-right-content">
                                    {
                                        dataList.map((item, index) => {
                                            return (
                                                <ListGroup key={index} >
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
                            :
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
                                    </Jumbotron>
                                    <div className="header-search">
                                        <Input type="text" name="search" id="search" placeholder="Search" />
                                    </div>
                                </div>
                                <div className="header-right-content">
                                    {
                                        dataList.map((item, index) => {
                                            return (
                                                <ListGroup key={index} className={`animated fadeInRight delay-${item.delay}s`}>
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
            }
        </React.Fragment>

    )
}
export default Header;