import React from 'react'
import Message from '../Items/Message'
import { MessageTypes } from '../../config/config'

const IntroductionCopies = () => {
    return (
        <>
            <Message
                position={{ left: 61, top: 821 }}
                type={MessageTypes.initialText}
            >
                ¡Se parte de nuestra celebración!
            </Message>
            <Message
                position={{ left: 191, top: 867 }}
                type={MessageTypes.doble}
            >
                DOBLE
            </Message>
            <Message
                position={{ left: 20, top: 1192 }}
                type={MessageTypes.initialText}
            >
                Aquí tienes unas <br/>
                sugerencias...
            </Message>
        </>
    )
}

export default IntroductionCopies