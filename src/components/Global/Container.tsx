import {cn} from '@/lib/utils'

interface Props {
  children: React.ReactNode
  className: string
}

const containerStyles = {
  width: 'w-[660px] md:w-[600px] sm:w-auto',
  paddingtop: 'pt-[250px] xl:pt-[200px] md:pt-[150px] sm:pt-[125px]',
  paddingbottom: 'pb-[175px] xl:pb-[125px] md:pb-[100px] sm:pb-[75px]',
  margin: 'mx-auto sm:mx-4',
}

const {width, paddingtop, paddingbottom, margin} = containerStyles

export default function Container({children, className}: Props) {
  return <main className={cn([width, paddingtop, paddingbottom, margin], className)}>{children}</main>
}
