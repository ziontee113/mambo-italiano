import { BackgroundImage } from '@/components/BackgroundImage'
import { LiLink } from '@/components/LiLink'

export default function Home() {
  return (
    <div>
      <div className="flex h-screen w-screen justify-center items-center">
        <BackgroundImage src="/images/00027.jpg" />
        <ul className="flex absolute top-0 right-0 space-x-8 p-10 text-white text-2xl">
          <LiLink href="/" content="Home" />
          <LiLink href="/" content="About" />
          <LiLink href="/" content="Contacts" />
          <LiLink href="/" content="FAQ" />
        </ul>
        <div className="">
          <h1 className="text-8xl font-bold text-white">Hello World</h1>
        </div>
      </div>
    </div>
  )
}
