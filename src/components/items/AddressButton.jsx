import React from 'react'
import PositioningWrapper from '../wrappers/PositioningWrapper'
import images from '../../assets/imgs'

const AddressButton = ({ position }) => {
    return (
        <PositioningWrapper position={position}>
            <a href="https://www.google.com/maps/search/?api=1&query=19.449746043358466, -99.17848158809478">
                <img width={"250px"} src={images.addressButton} />
            </a>
        </PositioningWrapper>
    )
}

export default AddressButton