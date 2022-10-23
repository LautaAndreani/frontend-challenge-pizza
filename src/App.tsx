import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Views/Home"
import Lists from "./Views/Lists"
import Local from "./Views/Local"

function App() {
	const [user, setUser] = useState<Boolean | null>(null)
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home setUser={setUser}/>} />
				<Route path="/lists" element={<Lists user={user} setUser={setUser}/>} />
				<Route path="/lists/:localId" element={<Local user={user}/>} />
			</Routes>
		</div>
	)
}

export default App
