import LeftCol from "../components/LeftCol";
import PizzaList from "../components/PizzaList";
import TwoColsLayout from "../Layout/TwoColsLayout";
type Props = {user: Boolean | null}

export default function Lists({ user }: Props) {
    return (
        <TwoColsLayout leftCol={<LeftCol/>} rightCol={<PizzaList user={user}/>} />
    )
}