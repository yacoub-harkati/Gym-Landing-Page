type Props = {
  children: React.ReactNode
}

function HText({ children }: Props) {
  return (
    <h1 className="basis-3 font-montserrat text-3xl font-bold uppercase">
      {children}
    </h1>
  )
}

export default HText
