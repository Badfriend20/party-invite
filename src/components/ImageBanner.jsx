import React from 'react'

const ImageBanner = ({ alt, image }) => {
    return (
        <div style={{ marginBottom: "20px" }}>
            <img src={image} alt={alt} />
        </div>
    )
}

export default ImageBanner