import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/AuthContext'
import { Container, Content, Header } from './styles'

const SignIn = () => {
    
    const { signIn } = useAuth()

    async function Logar() {
    await signIn({
        email: 'rafaelborges@gmail.com',
        password: '123456'
    })

    }

    return (
    <>
    <Container>


        <Header>
            <p>Conversor de Moedas</p>
        </Header>

        <Content>
           


            <button onClick={Logar}>
            <span>Fazer autenticação</span>
            </button>
        </Content>
    </Container>
    </>
)
}

export default SignIn


