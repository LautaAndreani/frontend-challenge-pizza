import { Link } from "react-router-dom"
import pizzas from "../api.json"
import { PizzasLocals } from "../models/types"

export default function PizzaList() {
	return (
		<main className="min-h-screen flex flex-col justify-between">
			<header className=" w-full">
				<nav className="flex items-center justify-end w-full p-8">
					<button className="flex items-center">
						<img src="/password.png" alt="icono cerrar sesion" className="w-6" />
						Salir
					</button>
				</nav>
			</header>

			<div className="container p-8 flex flex-col gap-8 justify-between">
				<h2 className="border-b-2 border-btn w-fit text-xl text-login">Pizzerías</h2>
				<span>
					<p className="text-3xl font-bold">Tiendas</p>
					<p className="text-login">Escoge tu pizzería favorita</p>
				</span>

				<section className="pizzerias flex flex-wrap gap-6">
					{pizzas.response.stores.map((local: PizzasLocals) => (
						<span role="button" key={local.id}>
							<Link to={`/lists/${local.id}`}>
								<figure>
									<img src={local.logo} alt={local.name} />
									<figcaption className="font-bold">{local.name}</figcaption>
								</figure>
								<p>{local.address}</p>
							</Link>
						</span>
					))}
				</section>
			</div>

			<footer className="bg-footer p-[1.55rem] w-full flex items-center justify-between">
				<figure className="flex gap-2 w-fit">
					<img src="/icons/facebook.svg" alt="facebook logo" className="w-5" />
					<img src="/icons/instagram.svg" alt="instagram logo" className="w-5" />
				</figure>
				<img src="/best-pizza.png" alt="best pizza logo" className="w-14" />
			</footer>
		</main>
	)
}
