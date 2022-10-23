import TwoColsLayout from "../Layout/TwoColsLayout"
import LeftCol from "../components/LeftCol"
import Login from "../components/Login"
import { LoginProps } from "../models/types"


export default function Home({ setUser }:Pick<LoginProps, 'setUser'> ) {
	return <TwoColsLayout leftCol={<LeftCol />} rightCol={<Login setUser={setUser}/>} />
}
