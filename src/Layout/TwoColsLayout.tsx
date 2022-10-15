type Props = { leftCol: JSX.Element; rightCol: JSX.Element }

export default function TwoColsLayout({ leftCol, rightCol }: Props) {
	return (
		<div className="bg-red">
			<div className="max-w-[50%]">{leftCol}</div>
			<div>{rightCol}</div>
		</div>
	)
}
