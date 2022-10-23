import { useMemo } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import api from "../api.json"
import { LoginProps } from "../models/types"

export default function Local({ user }: Pick<LoginProps, 'user'>) {
	if (!user) return <Navigate to="/" />
	const { localId = "1" } = useParams()
	const getCurrentLocal = (localId: string) => api.response.stores.find(pizza => pizza.id === Number(localId))

	const getLocal = useMemo(() => getCurrentLocal(localId), [localId])

	if (getLocal) {
		return (
			<div className="min-h-screen bg-gray-100">
				<div className="container bg-left-image bg-no-repeat bg-cover min-h-[10rem] min-w-full relative bg-login">
					<figure className="absolute top-20 left-[50%] -translate-x-[50%] w-fit">
						<img src={getLocal.logo} alt={`logo de ${getLocal.name}`} className="hover:scale-[1.05] transition w-[10rem]" />
					</figure>
				</div>
				<div className="container xl:w-[75%] w-full my-0 mx-auto">
					<section className="local-info mt-20 w-full mx-auto xl:px-10 px-5 pt-5 flex flex-wrap justify-between">
						<ul>
							<span className="flex flex-wrap gap-2 items-center">
								<li className="text-3xl font-bold">{getLocal.name} </li>
								<li className="w-fit"> - {getLocal.address}</li>
							</span>
							<li className="text-xl"> {getLocal.description}</li>
							<Link to="/lists" className="border-b-4 border-btn h-1">
								&larr; Volver a la lista
							</Link>
						</ul>
						<span className="invert flex gap-4 mt-2">
							{getLocal.instagram && (
								<a href={getLocal.instagram} target="_blank">
									<img src="/icons/instagram.svg" alt={`${getLocal.name} instagram link`} className="w-10" />
								</a>
							)}
							{getLocal.facebook && (
								<a href={getLocal.facebook} target="_blank">
									<img src="/icons/facebook.svg" alt={`${getLocal.name} instagram link`} className="w-10" />
								</a>
							)}
						</span>
					</section>
					<div className="container mt-20 py-6 flex gap-4 flex-wrap justify-center xl:w-full xl:px-0 px-4 mx-auto">
						<h2 className="w-full xl:ml-20 ml-0 text-2xl font-bold">Menú 🍕</h2>
						{getLocal.products.map(product => (
							<div
								key={product.id}
								className="bg-gray-200 rounded-xl flex h-[10rem] items-center max-w-[45%] xl:min-w-[45%] min-w-full transition hover:scale-[.98] cursor-pointer">
								<span className="bg-gray-300 min-h-full min-w-fit">
									<img src={product.img} alt={product.name} className="object-cover rounded-full transition-all w-40 p-4" />
								</span>
								<p className="text-2xl font-bold p-5">{product.name}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className="flex flex-col justify-center items-center min-h-screen gap-4">
			<p className="text-3xl font-bold">El local no se pudo encontrar 🍕</p>
			<Link to="/lists" className="hover:border-b-4 hover:border-btn min-h-[2rem]">
				&larr; Volver a la lista
			</Link>
		</div>
	)
}
