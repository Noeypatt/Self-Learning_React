import React from 'react';
import moment from 'moment';
import 'moment/locale/th';
import { Jumbotron, Input, ListGroup, ListGroupItem, ListGroupItemText } from 'reactstrap';

import Cloudy from './image/cloudy.svg';

moment.locale('th');

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
                <ListGroup>
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
        </ListGroupItemText>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Morbi leo risus</ListGroupItem>
                    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
            </div>
        </div>
    )
}
export default Header;