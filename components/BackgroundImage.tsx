import Image from 'next/image'

type BackgroundImageProps = {
  src: string
}

export const BackgroundImage = (props: BackgroundImageProps) => {
  return (
    <div className="-z-10 absolute w-full h-full">
      <Image
        src={props.src}
        alt="Background Image"
        style={{ objectFit: 'cover' }}
        fill
      />
    </div>
  )
}
