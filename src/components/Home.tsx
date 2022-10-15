import TwoColsLayout from "../Layout/TwoColsLayout"
import LeftCol from "./LeftCol"

export default function Home() {
	return <TwoColsLayout leftCol={<LeftCol />} rightCol={<h2>Right Col</h2>} />
}
