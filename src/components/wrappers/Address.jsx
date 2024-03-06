import React from 'react'
import Message from '../Items/Message'
import { MessageTypes } from '../../config/config'
import AddressButton from '../items/AddressButton'

const Address = () => {
    return (
        <>
            <Message
                position={{ left: 103, top: 2098 }}
                type={MessageTypes.address}
            >
                Lago Texcoco 16-A Anáhuac, <br></br>
                Miguel Hidalgo, CDMX
            </Message>
            <AddressButton position={{left:115, top: 2349}}/>
        </>
    )
}

export default Address