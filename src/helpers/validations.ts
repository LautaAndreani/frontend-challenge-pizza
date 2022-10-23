import { FormValues } from "../models/types";
import data from '../api.json'
const dbUsers = data.response.users  

export function formValidations(formState: FormValues) {
    if(!formState.email && !formState.password) return console.log('completa los campos')
    const isUserExist = dbUsers.find(user => (user.email === formState.email && user.password === formState.password))
    if(isUserExist) return true
    return false
}