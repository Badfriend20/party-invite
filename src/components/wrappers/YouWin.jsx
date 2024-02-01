import React from 'react'
import Message from '../Items/Message'
import { MessageTypes } from '../../config/config'

const YouWin = () => {
    return (
        <>
            <Message
                position={{ left: 100, top: 1420 }}
                type={MessageTypes.checkList}
            >
                Llegar a tiempo, la fiesta comienza
                8:00 pm y termina 1:00 am.
            </Message>
            <Message
                position={{ left: 100, top: 1460 }}
                type={MessageTypes.checkList}
            >
                Procura no salir a la calle, pues no
                hay tienditas cerca.
            </Message>
            <Message
                position={{ left: 100, top: 1506 }}
                type={MessageTypes.checkList}
            >
                Lleva lo que desees tomar para toda
                la noche.
            </Message>
            <Message
                position={{ left: 100, top: 1540 }}
                type={MessageTypes.checkList}
            >
                Puedes estacionar en la calle,
                hay cámaras de seguridad.
            </Message></>
    )
}

export default YouWin