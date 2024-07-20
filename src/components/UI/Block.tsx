import {cn} from '@/lib/utils'

interface Props {
  heading?: string
  text?: string | TrustedHTML
  image?: any
}

export const blockStyles = {
  style: 'w-full p-5 rounded-lg bg-foreground text-background',
  typography: 'text-[26px] sm:text-[24px] leading-[1.20]',
}
const {style, typography} = blockStyles

export default function Block({heading, text, image}: Props) {
  return (
    <article className={cn([style, typography], 'space-y-4')}>
      <div className="space-y-2.5">
        <h1>{heading}</h1>
        <p dangerouslySetInnerHTML={{__html: text as string}}></p>
      </div>

      <img className="rounded bg-background" src={image.src} alt={heading ? 'work image' : ''} />
    </article>
  )
}
