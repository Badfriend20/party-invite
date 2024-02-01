import React from 'react'
import { adjustment } from '../../config/config'

const PositioningWrapper = ({ children, position }) => {
    const style = {
        position: "absolute",
        top: position.top + adjustment,
        left: position.left
    }
    return (
        <div style={style}>{children}</div>
    )
}

export default PositioningWrapper