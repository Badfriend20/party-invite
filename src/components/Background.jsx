import React from 'react'
import images from '../assets/imgs'
import Number from './Number'

const Background = () => {


    return (
        <>
            <img src={images.backgroundBanner} alt="background" />
            <Number position={{ left: '25%', top: 108}} number={1} />
            <Number position={{ left: 113, top: 108 }} number={2} />

            <Number position={{ left: 156, top: 108}} number={1} />
            <Number position={{ left: 213, top: 108 }} number={2} />
        </>
    )
}

export default Background