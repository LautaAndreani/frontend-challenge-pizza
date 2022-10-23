export type PizzasLocals = { name: string; address: string; logo: string; id: number }

export interface FormValues {
    email: string,
    password: string
}

export interface LoginProps {
    user: Boolean | null
    setUser: React.Dispatch<React.SetStateAction<Boolean | null>>
}