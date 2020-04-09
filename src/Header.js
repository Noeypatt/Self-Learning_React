import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/th';
import { Jumbotron, Input, Media } from 'reactstrap';

import Cloudy from './image/cloudy.svg';

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
                </div>
            </div>
            <div className="header-right-content">
                <Media>
                    <Media left href="#">
                    </Media>
                    <Media body>
                        <Media heading>
                            <h5>Media heading</h5>
                        </Media>
                       D
                    </Media>
                </Media>
            </div>
        </div>
    )
}
export default Header;