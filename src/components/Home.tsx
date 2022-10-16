import TwoColsLayout from "../Layout/TwoColsLayout"
import LeftCol from "./LeftCol"
import Login from "./Login"

export default function Home() {
	return <TwoColsLayout leftCol={<LeftCol />} rightCol={<Login />} />
}
