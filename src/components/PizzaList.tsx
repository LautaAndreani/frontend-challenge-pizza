type PizzasLocals = { name: string; address: string; logo: string }
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

      <div className="container p-8 flex flex-col gap-8">
        <h2 className="border-b-2 border-btn w-fit text-xl text-login">Pizzerías</h2>
        <span>
          <p className="text-3xl font-bold">Tiendas</p>
          <p className="text-login">Escoge tu pizzería favorita</p>
        </span>

        <section className="pizzerias">
          {pizzas.response.stores.map((local: PizzasLocals) => (
            <span>
              <figure>
                <img src={local.logo} alt={local.name} />
                <figcaption>{local.name}</figcaption>
              </figure>
              <p>{local.address}</p>
            </span>
          ))}
        </section>
      </div>
    </>
  )
}
