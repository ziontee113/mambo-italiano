import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className="flex h-screen w-screen justify-center items-center">
        <div className="-z-10 absolute w-full h-full">
          <Image
            src="/images/00029.jpg"
            alt="Background Image"
            style={{ objectFit: 'cover' }}
            fill
          />
        </div>
        <div className="">
          <h1 className="text-8xl font-bold text-white">Hello World</h1>
        </div>
      </div>
    </div>
  )
}
