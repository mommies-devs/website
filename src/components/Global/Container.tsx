interface Props {
  children: React.ReactNode
}

export default function Container({children}: Props) {
  return <main className="w-[35%] mx-auto pt-[20vh] sm:w-auto sm:mx-2">{children}</main>
}
