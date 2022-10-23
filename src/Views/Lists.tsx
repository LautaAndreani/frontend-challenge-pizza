import LeftCol from "../components/LeftCol";
import PizzaList from "../components/PizzaList";
import TwoColsLayout from "../Layout/TwoColsLayout";

export default function Lists({user}) {
    return (
        <TwoColsLayout leftCol={<LeftCol/>} rightCol={<PizzaList user={user}/>} />
    )
}