import React from 'react';
import { Button } from 'antd';

const Header = () => {
    return (
        <div className="warp-header">
            <div className="header-container">
                <h1>ศูนย์รับเลี้ยง สุนัข และแมวจรจัด</h1>
                <h2>สัตว์เลี้ยงทุกตัว ล้วนต้องการความรัก เเละการดูเเล</h2>
                <h2>ให้คุณได้เป็นส่วนหนึ่ง ที่ได้ช่วยเหลือพวกเขา</h2>
                <Button>
                    <h3>มองหาเพื่อนรู้ใจ</h3>
                </Button>
            </div>

            <div className="header-photo">
                <p>Photo by Lum3n from Pexels</p>
            </div>



        </div>
    )
}
export default Header;