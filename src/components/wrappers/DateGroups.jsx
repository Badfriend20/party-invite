import React from 'react'
import Number from '../Items/Number'

const DateGroups = ({ children, positions = [] }) => {

    const numbers = [0, 0];

    const stringChildren = String(children);

    numbers[0] = stringChildren.length < 2 ? 0 : stringChildren[0];
    numbers[1] = stringChildren.length < 2 ? stringChildren[0] : stringChildren[1];
    
    return (
        <>
            {positions.map(({ left, top }, index) =>
                <Number key={index} position={{ left, top }} number={numbers[index]} />
            )}
        </>
    )
}

export default DateGroups