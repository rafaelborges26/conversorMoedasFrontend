import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Content, Header } from './styles'

const SignIn = () => {
    
    return (
    <>
    <Container>


        <Header>
            <p>Conversor de Moedas</p>
        </Header>

        <Content>
           
            <Link to='/converter'>
            <span>Fazer autenticação</span>
            </Link>
        </Content>
    </Container>
    </>
)
}

export default SignIn


