import { AuthConverter } from './AuthContext' //importar aq oara depois importar para o app para ficar mais facil
import React from 'react'

const AppProvider= (({children}) => { //Providers global, colocamos todos os providers aq para depois setar no App
    return (
        <AuthConverter>
                {children}
        </AuthConverter>
    )
})

export default AppProvider