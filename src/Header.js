import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/th';
import { Jumbotron, Button, Input, Card, CardTitle, CardText } from 'reactstrap';
import Cloudy from './image/cloudy.svg';
import Plane from './image/plane.svg';
import Car from './image/car.svg';
import Bus from './image/Bus.svg';
import Cruise from './image/cruise.svg';

moment.locale('th');
console.log(moment.locale());

const Header = () => {

    const date = moment().add(543, 'year').format('LL')
    return (
        <div className="warp-header">
            <div className="header-left-content">
                <Jumbotron>
                    <div className="header-title">
                        <img src={Cloudy} alt="planet-earth" />
                        <h6>วันที่ {date} </h6>
                    </div>
                    <p></p>
                </Jumbotron>
                <div className="header-search">
                    <Input type="text" name="search" id="search" placeholder="Search" />
                    <Button color="info">Search</Button>
                </div>
            </div>
            <div className="header-right-content">
            </div>
        </div>
    )
}
export default Header;