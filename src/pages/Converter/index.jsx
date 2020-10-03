import React from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiRepeat, FiRotateCw } from 'react-icons/fi'


import { Container, Content, Header, Section } from './styles'


const Converter = () => {
    return (
    <Container>

        <Header>
            <p>Conversor de Moedas</p>
            <Link to="/">
            <FiChevronLeft size={16} />
                voltar
            </Link>
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

        <Section>
            <p>Resultados da conversão:</p>
            <ul>
                <li>
                    <span>Conversão de: BRL</span> <strong>para: US</strong>  
                   <p>Valor a converter: 1,00  <strong>Resultado da conversão: 5,00 </strong> </p> 
                </li>
                <li>
                    <span>Conversão de: BRL</span> <strong>para: US</strong>  
                   <p>Valor a converter: 1,00  <strong>Resultado da conversão: 5,00 </strong> </p> 
                </li>
                <li>
                    <span>Conversão de: BRL</span> <strong>para: US</strong>  
                   <p>Valor a converter: 1,00  <strong>Resultado da conversão: 5,00 </strong> </p> 
                </li>
                <li>
                    <span>Conversão de: BRL</span> <strong>para: US</strong>  
                   <p>Valor a converter: 1,00  <strong>Resultado da conversão: 5,00 </strong> </p> 
                </li>
                
            </ul>
        </Section>

    </Container>
    )
} 

export default Converter