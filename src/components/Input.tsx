import { FormValues } from "../models/types"

type Props = {
	placeholder: string
	ico: "user" | "password"
	nameInput: string
	type: "password" | "text"
	setFormState: React.Dispatch<React.SetStateAction<FormValues>>
}

export default function Input({ placeholder, nameInput = "user", type = "text", ico, setFormState }: Props) {
	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setFormState((previousState: FormValues) => ({
			...previousState,
			[e.target.name.toLowerCase()]: e.target.value,
		}))
	}
	return (
		<span className="py-4 px-2 border-2 border-solid border-text-login flex justify-between items-center hover:border-btn">
			<input
				type={type}
				name={nameInput}
				placeholder={placeholder}
				className="min-h-[3rem] focus:outline-none w-full"
				autoFocus={ico === "user" && true}
				onChange={handleChange}
        required
			/>
			<figure>
				<img src={`${ico}.png`} alt={`icono de ${placeholder}`} className="w-7" />
			</figure>
		</span>
	)
}
