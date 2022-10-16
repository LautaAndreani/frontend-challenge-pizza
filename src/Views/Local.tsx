import { useParams } from "react-router-dom"

export default function Local() {
  const { local } = useParams()

  return <p>Soy una vista de pizza</p>
}
