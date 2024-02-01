import React from 'react'
import images from '../assets/imgs'
import Number from './Number'

const Background = () => {


    return (
        <>
            <img src={images.backgroundBanner} alt="background" />
            
            <Number position={{ left: 85, top: '64.3vh'}} number={1} />
            <Number position={{ left: 173, top: '64.3vh' }} number={2} />

            <Number position={{ left: 290, top: '64.3vh'}} number={1} />
            <Number position={{ left: 375, top: '64.3vh' }} number={2} />

            <Number position={{ left: 85, top: '78vh'}} number={1} />
            <Number position={{ left: 173, top: '78vh' }} number={2} />

            <Number position={{ left: 290, top: '78vh'}} number={1} />
            <Number position={{ left: 375, top: '78vh' }} number={2} />
        </>
        
    )
}

export default Background