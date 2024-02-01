import React from 'react'
import { MessageTypes } from '../../config/config'
import Message from '../Items/Message'

const YouLose = () => {
    return (
        <>
            <Message
                position={{ left: 235, top: 1740 }}
                type={MessageTypes.checkList}
            >
                No te desconectes, vomites o hagas
                desfiguros, nos cancelan la fiesta.
            </Message>
            <Message
                position={{ left: 235, top: 1795 }}
                type={MessageTypes.checkList}
            >
                No descuidar el mobiliriario de la terraza.
                incluyendo los baños.

            </Message>
            <Message
                position={{ left: 235, top: 1850 }}
                type={MessageTypes.checkList}
            >
                Esta prohibido consumir sustancias
                diferentes al tabaco y alcohol.

            </Message>
            <Message
                position={{ left: 235, top: 1905 }}
                type={MessageTypes.checkList}
            >
                Cuida no ser grosero con el personal
                del lugar (DJ y mesera).
            </Message>





        </>
    )
}

export default YouLose