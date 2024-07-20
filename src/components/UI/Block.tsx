import {cn} from '@/lib/utils'

interface Props {
  children: React.ReactNode
}

export default function Block({children}: Props) {
  const blockStyles = {
    size: 'w-full p-5 rounded-lg',
    text: 'text-[26px] sm:text-[24px] leading-[1.20]',
    colors: 'bg-foreground text-background',
  }

  const {size, text, colors} = blockStyles

  return <article className={cn(size, text, colors)}>{children}</article>
}
