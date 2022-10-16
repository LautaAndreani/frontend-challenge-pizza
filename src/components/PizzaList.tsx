type PizzasLocals = { name: string; address: string; logo: string; id: number }
import { Link } from "react-router-dom"
import pizzas from "../api.json"

export default function PizzaList() {
  return (
    <>
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

      <footer className="bg-footer p-[1.6rem] w-full flex items-center justify-between">
        <figure className="flex">
          <img src="" alt="facebook logo" />
          <img src="" alt="instagram logo" />
        </figure>
        <img src="/best-pizza.png" alt="best pizza logo" className="w-14" />
      </footer>
    </>
  )
}
