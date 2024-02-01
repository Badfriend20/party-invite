import React from 'react'
import images from '../assets/imgs'
import Number from './Number'

const Background = () => {

    const style = {
        maxWidth: "320px",
        marginRight: "auto",
        marginLeft: "auto",
        position: "relative"
    }

    return (
        <div style={style}>
            <img src={images.backgroundBanner} alt="background" />
            <Number position={{ left: 56, top: 108}} number={1} />
            <Number position={{ left: 113, top: 108 }} number={2} />
        </div>
    )
}

export default Background