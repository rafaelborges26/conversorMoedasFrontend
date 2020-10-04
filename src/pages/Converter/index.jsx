import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiRepeat, FiRotateCw } from 'react-icons/fi'
import api from '../../services/api'
import apiRates from '../../services/exchangeRates'

import { Form } from '@unform/web'

import Input from '../../components/Input'
import { Container, Content, Header, Section } from './styles'

const Converter = () => {

    const formRef = useRef(null) 
    
    const [converted, setConverted] = useState([{}])

    useEffect(() => {
        api.get('/converter').then(response => {
            const valuesConverted = response.data.converter

            setConverted(valuesConverted)
            
        })

        apiRates.get(`/latest?base=BRL`).then(response => {
            const rates = response.data
            console.log(rates)
        })



    },[converted])

    const handleConvert = useCallback(async (data) => {
    
    try {
        await api.post('/converter', data);
 
     } catch (err) {
        console.log(err.response.error);
     }

    },[])

    
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
        <Form initialData={{date: new Date()}} ref={formRef} onSubmit={handleConvert}>
             <div id="valor"> 
                 <span>Valor</span>
                 <Input name="valueInside" type="text" placeholder="0,00"/>
                 <Input name="valueOutside" type="text" placeholder="0,00"/>
                 <Input name="typeConvert" type="text" placeholder=""/>
                 <Input name="typeConverted" type="text" placeholder=""/>
             </div>

             <div id="de"> 
                 <span>Converter de</span>

                 <select name="typeConvert">
                     <option value="BRL">Real(BRL)</option>
                     <option value="USD">Dólar dos Estados Unidos (USD)</option>
                     <option value="CAD">Dólar Canadense (CAD)</option>
                 </select>
             </div>

             <div id="para"> 
                 <span>Para</span>

                 <select name="typeConverted">
                     <option value="BRL">Real(BRL)</option>
                     <option value="USD">Dólar dos Estados Unidos (USD)</option>
                     <option value="CAD">Dólar Canadense (CAD)</option>
                 </select>
             </div>

             <button type="submit">
                 <FiRotateCw size={18}/>
             </button>

            </Form>

        </Content>

        <Section>
            <h3>Resultados da conversão:</h3>
            <ul>
                {converted.map(converte => (
                    <li key={converte.id}>
                        <p>Conversão de: <strong>{converte.typeConvert}</strong>  <span> - Para: <strong>{converte.typeConverted}</strong></span></p>
                <p>Valor a converter: <strong>{converte.valueInside}</strong> <span> - Resultado da conversão: <strong>{converte.valueOutside}</strong> </span> </p> 
                    </li>
                ))
                }       
                </ul>
        </Section>

    </Container>
    )
} 

export default Converter