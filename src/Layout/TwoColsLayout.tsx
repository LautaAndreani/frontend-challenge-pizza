type Props = { leftCol: JSX.Element; rightCol: JSX.Element }

export default function TwoColsLayout({ leftCol, rightCol }: Props) {
  return (
    <div className="flex min-w-full">
      <div className="w-1/2">{leftCol}</div>
      <div className="w-1/2">{rightCol}</div>
    </div>
  )
}
