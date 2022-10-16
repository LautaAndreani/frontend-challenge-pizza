import Input from "./Input"

export default function Login() {
	return (
		<div className="container min-w-full min-h-screen flex flex-col justify-center items-center text-center gap-10">
			<div className="logo">
				<img src="/b-pizza-b.png" alt="best pizza logo" className="w-[15rem]" />
			</div>

			<div className="flex flex-col gap-2">
				<h2 className="text-3xl font-bold text-login_title">Bienvenido</h2>
				<p className="text-1xl text-login">A las mejores pizzas del país</p>
			</div>

			<form className="flex flex-col gap-4 w-1/3">
				<Input placeholder="Usuario" ico={"user"} />
				<Input placeholder="Contraseña" ico={"password"} />
				<button>¿Olvidaste tu contraseña?</button>
				<input type="submit" role="button" value="Iniciar Sesión" className="p-4 bg-btn font-bold" />
			</form>
		</div>
	)
}
