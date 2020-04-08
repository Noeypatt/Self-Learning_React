import React from 'react';
import moment from 'moment';
import 'moment/locale/th';
import { Jumbotron, Button, Input } from 'reactstrap';
import Cloudy from './image/cloudy.svg'

moment.locale('th');
console.log(moment.locale());

const Header = () => {

    const date = moment().add(543, 'year').format('LL')

    return (
        <div className="warp-header">
            <div className="header-left-content">
                <Jumbotron>
                    {/* <h1 className="display-3"><img src={Cloudy} alt="planet-Cloudy" />Hello, world!</h1> */}
                    <div className="header-title">
                        <img src={Cloudy} alt="planet-earth" />
                        <h6>วันที่ {date} </h6>
                    </div>
                    <p></p>
                </Jumbotron>
                <div className="header-search">
                    <Input type="text" name="search" id="search" placeholder="Search" />
                    <Button color="secondary">Search</Button>
                </div>
            </div>
            <div className="header-right-content">

            </div>

        </div>
    )
}
export default Header;