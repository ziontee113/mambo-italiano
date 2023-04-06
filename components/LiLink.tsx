import Link from 'next/link'

type LiLinkProps = {
  href: string
  content: string
  hoverEffect?: boolean
  hoverColor?: string
}

export const LiLink = ({
  href,
  content,
  hoverEffect = true,
  hoverColor = 'bg-purple-800',
}: LiLinkProps) => {
  return (
    <li className="group transition flex flex-col items-center">
      <Link href={href}>{content}</Link>
      {hoverEffect && (
        <span
          className={`w-0 mt-1 group-hover:w-full transition-all duration-300 h-0.5 ${hoverColor}`}
        ></span>
      )}
    </li>
  )
}
