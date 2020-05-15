import React from "react"
import LazyLoad from "react-lazyload"

interface Props {
  img: { src: string; preSrc: string }
  alt: string
  style?: React.CSSProperties
}

export default function Image({ img, alt, style }: Props) {
  return (
    <LazyLoad
      once
      placeholder={
        <img src={img.preSrc} alt={alt} style={{ width: 200, borderRadius: 10, ...style }} />
      }
    >
      <img src={img.src} alt={alt} style={{ width: 200, borderRadius: 10, ...style }} />
    </LazyLoad>
  )
}
