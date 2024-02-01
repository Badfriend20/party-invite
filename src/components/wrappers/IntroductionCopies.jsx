import React from 'react'
import Message from '../Items/Message'
import { MessageTypes } from '../../config/config'

const IntroductionCopies = () => {
    return (
        <>
            <Message
                position={{ left: 20, top: 830 }}
                type={MessageTypes.initialText}
            >
                ¡Se parte de nuestra celebración!
            </Message>
            <Message
                position={{ left: 20, top: 850 }}
                type={MessageTypes.doble}
            >
                DOBLE
            </Message>
            <Message
                position={{ left: 20, top: 1160 }}
                type={MessageTypes.initialText}
            >
                Aquí tienes unas
            </Message>
            <Message
                position={{ left: 20, top: 1180 }}
                type={MessageTypes.initialText}
            >
                sugerencias...
            </Message>
        </>
    )
}

export default IntroductionCopies