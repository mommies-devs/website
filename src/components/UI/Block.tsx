import {cn} from '@/lib/utils'

interface Props {
  heading?: string
  text?: string | TrustedHTML
  image?: any
}

const blockStyles = {
  style: 'w-full p-5 rounded-lg bg-foreground text-background',
  typography: 'text-[26px] sm:text-[24px] leading-[1.20]',
}

export default function Block({heading, text, image}: Props) {
  const {style, typography} = blockStyles

  return (
    <article className={cn([style, typography], 'space-y-4')}>
      {(heading || text) && (
        <div className="space-y-2.5">
          {heading && <h1>{heading}</h1>}
          {text && <p dangerouslySetInnerHTML={{__html: text as string}}></p>}
        </div>
      )}

      {image && <img className="rounded-md bg-background" src={image.src} alt={heading && 'work image'} />}
    </article>
  )
}
