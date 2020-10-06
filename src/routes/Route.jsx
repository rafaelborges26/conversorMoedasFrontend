import React from 'react'
import { RouteProps as ReactDOMRouteProps, Route as ReactDOMRoute, Redirect } from 'react-router-dom'

import { useAuth } from '../hooks/AuthContext' //obter variavel global de autenticacao



//obtendo as propriedades

const Route = ({ 
    isPrivate = false,
    component: Component, //obtendo o componente
    ...rest  
    }) => {

    const { user } = useAuth() //se exitir a variavel significa q o user esta autenticado/logado

        console.log(user, isPrivate)

    return (
        <ReactDOMRoute 
            {...rest}
            render={({ location }) => {
                
                return isPrivate === !!user ? (
                    <Component />
                ) : (
                    <Redirect to={{
                        pathname: isPrivate ? '/' : '/converter',
                        state: {from: location} //pegar o historico do site
                        }}
                    />
                )
            }}
        
         />
    )
}

export default Route