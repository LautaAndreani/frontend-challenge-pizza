import TwoColsLayout from "../Layout/TwoColsLayout"
import LeftCol from "../components/LeftCol"
import Login from "../components/Login"

export default function Home({setUser}) {
	return <TwoColsLayout leftCol={<LeftCol />} rightCol={<Login setUser={setUser}/>} />
}
