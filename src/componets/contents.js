import React from 'react'
import About from './about'
import Service from './service'
import Gallary from './gallary'
import Contact from './contact'

const Content = () => {
    return (
        <div className="warp-content">
            <About />
            <Service />
            <Gallary />
            <Contact />
        </div>
    )
}
export default Content