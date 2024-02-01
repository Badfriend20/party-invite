import React from 'react'
import images from '../assets/imgs'
import Number from './Number'

const Background = () => {


    return (
        <>
            <img src={images.backgroundBanner} alt="background" />

            <Number position={{ left: 85, top: 899 }} number={1} />
            <Number position={{ left: 173, top: 899 }} number={2} />

            <Number position={{ left: 290, top: 899 }} number={3} />
            <Number position={{ left: 375, top: 899 }} number={4} />

            <Number position={{ left: 85, top: 1015 }} number={5} />
            <Number position={{ left: 173, top: 1015 }} number={6} />

            <Number position={{ left: 290, top: 1015 }} number={7} />
            <Number position={{ left: 375, top: 1015 }} number={8} />
        </>

    )
}

export default Background