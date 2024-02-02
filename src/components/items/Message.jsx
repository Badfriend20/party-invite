import React from 'react'
import PositioningWrapper from '../wrappers/PositioningWrapper'
import { MessageTypes } from '../../config/config'

const Message = ({ position, type, children }) => {

    const currentType = Object.keys(MessageTypes).filter(item => MessageTypes[item] == type)[0]
    //Dependiendo el valor de currentType se aplican estilos diferentes
    const styles = {
        address: {
            "font-size": "28px",
            "text-align": "center",
            "color": "white",
            "font-family": "Oswald",
        },
        checkListW: {
            color: "#3d3d3d",
            "font-size": "14px",
            "font-family": 'MidnightMemories',
            "line-height": "19px"
        },
        checkListL: {
            color: "#3d3d3d",
            "font-size": "14px",
            "font-family": 'MidnightMemories',
            "line-height": "22px"
        },
        invite: {
            color: "#052c42",
            "font-family": 'Oswald',
            "font-weight": "bold",
            "font-size": "20px"
        },
        initialText: {
            color: "#dc5a0e",
            "font-family": 'Oswald',
            "font-size": "29px"
        },
        doble: {
            color: "#dc5a0e",
            "font-family": 'Oswald',
            "font-size": "35px",
            "font-weight": "bold"
        },
        clock: {
            color: "#052c42",
            "font-family": 'Oswald',
            "font-size": "55px",
            "font-weight": "bold"
        }
    }

    return (
        <div style={styles[currentType]}>
            <PositioningWrapper position={position}>
                {children}
            </PositioningWrapper>
        </div>
    )
}

export default Message