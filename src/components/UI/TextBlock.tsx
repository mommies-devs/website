import {cn} from '@/lib/utils'
import {blockStyles} from '#/UI/Block'
const {style, typography} = blockStyles

interface Props {
  text: string | TrustedHTML
}

export default function TextBlock({text}: Props) {
  return (
    <article className={cn(style, typography)}>
      <p dangerouslySetInnerHTML={{__html: text as string}}></p>
    </article>
  )
}
