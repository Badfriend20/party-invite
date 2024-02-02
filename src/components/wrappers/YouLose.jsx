import React from 'react'
import { MessageTypes } from '../../config/config'
import Message from '../Items/Message'

const YouLose = () => {
    return (
        <>
            <Message
                position={{ left: 235, top: 1822 }}
                type={MessageTypes.checkListL}
            >
                No te desconectes, vomites o hagas <br/>
                desfiguros, nos cancelan la fiesta.
            </Message>
            <Message
                position={{ left: 235, top: 1865 }}
                type={MessageTypes.checkListL}
            >
                No descuidar el mobiliriario de la terraza. <br/>
                incluyendo los baños.

            </Message>
            <Message
                position={{ left: 235, top: 1908 }}
                type={MessageTypes.checkListL}
            >
                Esta prohibido consumir sustancias <br/>
                diferentes al tabaco y alcohol.

            </Message>
            <Message
                position={{ left: 235, top: 1952 }}
                type={MessageTypes.checkListL}
            >
                Cuida no ser grosero con el personal <br/>
                del lugar (DJ y mesera).
            </Message>





        </>
    )
}

export default YouLose