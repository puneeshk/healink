import React from 'react'
import { ImageProps } from "../../interfaces/image/image";

const AtomImage: React.FC<ImageProps> = ({
    src,
    alt='',
    className,
    onClick,
    width,
    height
}): JSX.Element | null => {
    return (
        <img
            src={src} 
            alt={alt}
            onClick={onClick}
            className={className}
            width={width}
            height={height}
        />
    )
}

export default AtomImage