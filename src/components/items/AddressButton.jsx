import React from 'react'
import PositioningWrapper from '../wrappers/PositioningWrapper'
import images from '../../assets/imgs'

const AddressButton = ({ position }) => {
    return (
        <PositioningWrapper position={position}>
            <a href="https://www.google.com/maps/@19.44974,-99.1785095,3a,75y,78.09h,118.16t/data=!3m6!1e1!3m4!1sTc0gOzCgshdWkBUU_v_6aQ!2e0!7i16384!8i8192?entry=ttu">
                <img width={"250px"} src={images.addressButton} />
            </a>
        </PositioningWrapper>
    )
}

export default AddressButton