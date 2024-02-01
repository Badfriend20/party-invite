import React from 'react'
import images from '../assets/imgs'
import YouWin from './wrappers/YouWin'
import Countdown from './wrappers/Countdown'
import IntroductionCopies from './wrappers/IntroductionCopies'
import YouLose from './wrappers/YouLose'
import Address from './wrappers/Address'
import Message from './Items/Message'
import { MessageTypes } from '../config/config'

const Background = () => {

    return (
        <>
            <img src={images.backgroundBanner} alt="background" />
            <Countdown />
            <IntroductionCopies />
            <YouWin />
            <YouLose />
            <Address />
            <Message position={{ left: 250, top: 2580 }} type={MessageTypes.invite}>
                PRESENTA ESTA INVITACIÓN
                EN LA ENTRADA DEL EVENTO
            </Message>
        </>

    )
}

export default Background