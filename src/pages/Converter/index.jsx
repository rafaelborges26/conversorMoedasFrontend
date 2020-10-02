import React from 'react'
import { FiChevronLeft, FiRepeat, FiRotateCw } from 'react-icons/fi'


import { Container, Content, Header } from './styles'


const Converter = () => {
    return (
    <Container>

        <Header>
            <p>Conversor de Moedas</p>
            <a href="/converter">
            <FiChevronLeft />
                voltar
            </a>
        </Header>

        <Content>
            <div id="valor"> 
                <span>Valor</span>
                <input type="text" placeholder="0,00"/>
            </div>

            <div id="de"> 
                <span>Converter de:</span>

                <select id="typesCoins">
                    <option value="BRL">Real(BRL)</option>
                    <option value="USD">Dólar dos Estados Unidos (USD)</option>
                    <option value="CAD">Dólar Canadense (CAD)</option>
                </select>
            </div>

            <button>
                <FiRepeat size={16}/>
            </button>

            <div id="para"> 
                <span>Para:</span>

                <select id="typesCoins">
                    <option value="BRL">Real(BRL)</option>
                    <option value="USD">Dólar dos Estados Unidos (USD)</option>
                    <option value="CAD">Dólar Canadense (CAD)</option>
                </select>
            </div>

            <button>
                <FiRotateCw size={18}/>
            </button>

        </Content>

    </Container>
    )
} 

export default Converter