import {isMobile} from '@bozzhik/is-mobile'
import {cn} from '@/lib/utils'

import {ChevronRight} from 'lucide-react'

interface Props {
  heading?: string
  text?: string | TrustedHTML
  image?: any
  link?: string
  linkZone?: 'text' | 'image'
}

export const blockStyles = {
  style: 'w-full p-5 rounded-lg bg-foreground text-background',
  typography: 'text-[26px] sm:text-[24px] leading-[1.20]',
}
const {style, typography} = blockStyles

export default function Block({heading, text, image, link, linkZone = 'image'}: Props) {
  const BlockLink = (
    <a href={link} className="grid duration-200 rounded min-w-9 sm:h-10 bg-background place-items-center hover:bg-primary">
      <ChevronRight className="stroke-foreground s-9 sm:s-7" />
    </a>
  )

  const BlockText = (
    <div className="space-y-2.5">
      <h1>{heading}</h1>
      <p dangerouslySetInnerHTML={{__html: text as string}}></p>
    </div>
  )

  const BlockImage = (
    <div className="rounded bg-background h-[30vh] w-full overflow-hidden group">
      <img className="object-cover duration-500 s-full group-hover:scale-[103%]" src={image?.src} alt={heading ? 'work image' : ''} />
    </div>
  )

  return (
    <article className={cn([style, typography], 'sm:space-y-2.5')}>
      <div className="space-y-4">
        {link && linkZone === 'text' ? (
          <div className="flex gap-4">
            {BlockText}
            {!isMobile && BlockLink}
          </div>
        ) : (
          BlockText
        )}

        {link && linkZone === 'image' ? (
          <div className="flex gap-2.5">
            {BlockImage}
            {!isMobile && BlockLink}
          </div>
        ) : (
          BlockImage
        )}
      </div>

      {isMobile && link && BlockLink}
    </article>
  )
}
