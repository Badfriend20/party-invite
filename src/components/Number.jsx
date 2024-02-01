import React from 'react'

const Number = ({ number, position }) => {
    const style = {
        position: "absolute",
        top: position.top,
        left: position.left
    }
    return (
        <div style={style}>{number}</div>
    )
}

export default Number