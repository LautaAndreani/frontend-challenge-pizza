import TwoColsLayout from "../Layout/TwoColsLayout"
import LeftCol from "../components/LeftCol"
import Login from "../components/Login"

type Props = {setUser: React.Dispatch<React.SetStateAction<Boolean | null>>}

export default function Home({ setUser }:Props ) {
	return <TwoColsLayout leftCol={<LeftCol />} rightCol={<Login setUser={setUser}/>} />
}
