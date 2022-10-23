import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { formValidations } from "../helpers/validations"
import { FormValues } from "../models/types"
import Input from "./Input"

type Props = {setUser: React.Dispatch<React.SetStateAction<Boolean | null>>}

export default function Login({ setUser }: Props) {
	const [formState, setFormState] = useState<FormValues>({email: '', password: ''}) 	
	const navigate = useNavigate()
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		if(formValidations(formState))
		setUser(true)
		return navigate('/lists')
	}

	return (
		<div className="container min-w-full min-h-screen flex flex-col justify-center items-center text-center gap-10">
			<div className="logo">
				<img src="/b-pizza-b.png" alt="best pizza logo" className="w-[15rem]" />
			</div>

			<div className="flex flex-col gap-2">
				<h2 className="text-3xl font-bold text-login_title">Bienvenido</h2>
				<p className="text-1xl text-login">A las mejores pizzas del país</p>
			</div>

			<form className="flex flex-col gap-4 w-1/2" onSubmit={handleSubmit}>
				<Input placeholder="Usuario" ico={"user"} type="text" nameInput="email" setFormState={setFormState} />
				<Input placeholder="Contraseña" ico={"password"} type="password" nameInput="password" setFormState={setFormState} />
				<button>¿Olvidaste tu contraseña?</button>
				<input type="submit" role="button" value="Iniciar Sesión" className="p-4 bg-btn font-bold"  />
			</form>
		</div>
	)
}
