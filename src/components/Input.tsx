type Props = { placeholder: string; ico: "user" | "password" }

export default function Input({ placeholder, ico }: Props) {
	return (
		<span className="py-4 px-2 border-2 border-solid border-text-login flex justify-between items-center">
			<input
				type="text"
				name={placeholder}
				placeholder={placeholder}
				className="min-h-[3rem] focus:outline-none w-full"
				autoFocus={ico === "user" && true}
			/>
			<figure>
				<img src={`${ico}.png`} alt={`icono de ${placeholder}`} className="w-7" />
			</figure>
		</span>
	)
}
