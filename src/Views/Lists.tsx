import LeftCol from "../components/LeftCol";
import PizzaList from "../components/PizzaList";
import TwoColsLayout from "../Layout/TwoColsLayout";
import { LoginProps } from "../models/types";

export default function Lists({ user, setUser }: LoginProps) {
    return (
        <TwoColsLayout leftCol={<LeftCol/>} rightCol={<PizzaList user={user} setUser={setUser}/>} />
    )
}