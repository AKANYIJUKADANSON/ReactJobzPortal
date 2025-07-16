import React from 'react'

const ImageComponent = ({ src, alt, classNameProps='h-10 w-auto' }) => {
  return (
    <div>
      <img src={src} alt={alt} className={classNameProps} />
    </div>
  )
}

export default ImageComponent