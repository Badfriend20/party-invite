import React from 'react'
import Message from '../Items/Message'
import { MessageTypes } from '../../config/config'
import AddressButton from '../items/AddressButton'

const Address = () => {
    return (
        <>
            <Message
                position={{ left: 60, top: 2065 }}
                type={MessageTypes.address}
            >
                Lago Texcoco 16 Anáhuac,
                Miguel Hidalgo, CDMX
            </Message>
            <AddressButton position={{left:115, top: 2320}}/>
        </>
    )
}

export default Address