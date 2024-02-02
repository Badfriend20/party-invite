import React from 'react'
import PositioningWrapper from '../wrappers/PositioningWrapper'

const Number = ({ number, position }) => {  
    
    const style = {
        color: "#052c42",
        "font-family": 'Oswald',
        "font-size": "55px",
        "font-weight": "bold"
    }

    
    return (
        <div style={style}>
            <PositioningWrapper position={position}>
                {number}
            </PositioningWrapper>
        </div>
    )
}

export default Number