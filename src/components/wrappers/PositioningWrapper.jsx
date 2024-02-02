import React from 'react'
import { Adjustment } from '../../config/config'

const PositioningWrapper = ({ children, position, fontFamily }) => {
    const style = {
        position: "absolute",
        top: position.top + Adjustment,
        left: position.left,
        fontFamily
    }
    return (
        <div style={style}>{children}</div>
    )
}

export default PositioningWrapper