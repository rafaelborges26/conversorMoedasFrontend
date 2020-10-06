import React ,{ createContext, useCallback, useState, useContext } from 'react'
import api from '../services/api'

const AuthContext = createContext()



export const AuthConverter = ({ children }) => {
    const [data, setData] = useState(() => { //quando o user sair e voltar pro site
        const token = localStorage.getItem('@Converter.token')
        const user = localStorage.getItem('@Converter.user')

        if(token && user) {
            return {token, user: JSON.parse(user)}
        } else {
            return ({})
        }
    })

   const signIn = useCallback(async ({email, password}) => { //metodo para login
    const response = await api.post('sessions', {
        email: email,
        password: password
    })

    const { token,user } = response.data //valores da api

    localStorage.setItem('@Converter.token', token)
    localStorage.setItem('@Converter.user', JSON.stringify(user)) //usar stringfy por ser um objeto
        setData({token, user})
   }, [])

   return (
    <AuthContext.Provider value={{user: data.user, signIn }} >
        {children}
    </AuthContext.Provider>
)
}

export function useAuth() {
    const context = useContext(AuthContext) //passando a var de contexto aqui

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider') //disparar o erro se usar o Auth sem passar o auth provider em volta da tag
    }

    return context // se achar retorna
} 