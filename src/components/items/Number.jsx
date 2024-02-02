import React from 'react'
import PositioningWrapper from '../wrappers/PositioningWrapper'

const Number = ({ number, position }) => {    
    return (
        <PositioningWrapper position={position} fontFamily={"MidnightMemories"}>{number}</PositioningWrapper>
    )
}

export default Number