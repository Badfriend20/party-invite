import React from 'react'
import PositioningWrapper from '../wrappers/PositioningWrapper'
import { MessageTypes } from '../../config/config'

const Message = ({ position, type, children }) => {

    const currentType = Object.keys(MessageTypes).filter(item => MessageTypes[item] == type)[0]
    //Dependiendo el valor de currentType se aplican estilos diferentes
    const styles = {
        address: {
            color: "red"
        },
        checkList: {
            color: "green"
        },
        invite: {
            color: "blue"
        },
        initialText: {
            color: "orange"
        },
        doble: {
            color: "black"
        }
    }

    return (
        <div style={styles[currentType]}>
            <PositioningWrapper position={position} fontFamily={"Oswald"}>
                {children}
            </PositioningWrapper>
        </div>
    )
}

export default Message