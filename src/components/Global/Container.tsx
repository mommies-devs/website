import {cn} from '@/lib/utils'

interface Props {
  children: React.ReactNode
  className: string
}

const containerStyles = {
  width: 'w-[660px] md:w-[600px] sm:w-auto',
  padding: 'pt-[250px] xl:pt-[200px] md:pt-[150px] sm:pt-[125px]',
  margin: 'mx-auto sm:mx-4',
}

const {width, padding, margin} = containerStyles

export default function Container({children, className}: Props) {
  return <main className={cn([width, padding, margin], className)}>{children}</main>
}
