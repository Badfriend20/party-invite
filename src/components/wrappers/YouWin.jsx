import React from 'react'
import Message from '../Items/Message'
import { MessageTypes } from '../../config/config'

const YouWin = () => {
    return (
        <>
            <Message
                position={{ left: 100, top: 1474 }}
                type={MessageTypes.checkListW}
            >
                Llegar a tiempo, la fiesta comienza <br/>
                8:00 pm y termina 1:00 am.
            </Message>
            <Message
                position={{ left: 100, top: 1512 }}
                type={MessageTypes.checkListW}
            >
                Procura no salir a la calle, pues no <br/>
                hay tienditas cerca.
            </Message>
            <Message
                position={{ left: 100, top: 1550 }}
                type={MessageTypes.checkListW}
            >
                Lleva lo que desees tomar para toda <br/>
                la noche.
            </Message>
            <Message
                position={{ left: 100, top: 1589 }}
                type={MessageTypes.checkListW}
            >
                Puedes estacionar en la calle, <br/>
                hay cámaras de seguridad.
            </Message></>
    )
}

export default YouWin