import React from 'react'
import PositioningWrapper from '../wrappers/PositioningWrapper'

const Number = ({ number, position }) => {
    //Aca se debe agregar el modificador del Number 
    return (
        <PositioningWrapper position={position}>{number}</PositioningWrapper>
    )
}

export default Number