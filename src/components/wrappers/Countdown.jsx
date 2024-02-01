import React from 'react'
import Number from '../Items/Number'

const Countdown = () => {
    return (
        <>

            <Number position={{ left: 85, top: 935 }} number={1} />
            <Number position={{ left: 173, top: 935 }} number={2} />

            <Number position={{ left: 290, top: 935 }} number={3} />
            <Number position={{ left: 375, top: 935 }} number={4} />

            <Number position={{ left: 85, top: 1052 }} number={5} />
            <Number position={{ left: 173, top: 1052 }} number={6} />

            <Number position={{ left: 290, top: 1052 }} number={7} />
            <Number position={{ left: 375, top: 1052 }} number={8} /></>
    )
}

export default Countdown