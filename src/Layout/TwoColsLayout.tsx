type Props = { leftCol: JSX.Element; rightCol: JSX.Element }

export default function TwoColsLayout({ leftCol, rightCol }: Props) {
	return (
		<div>
			<div>{leftCol}</div>
			<div>{rightCol}</div>
		</div>
	)
}
