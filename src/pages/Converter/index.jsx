import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Link , useHistory} from 'react-router-dom'
import { FiChevronLeft, FiRepeat, FiRotateCw } from 'react-icons/fi'
import api from '../../services/api'
import apiRates from '../../services/exchangeRates'


import { Form } from '@unform/web'

import Input from '../../components/Input'
import Select from '../../components/Select'

import { Container, Content, Header, Section } from './styles'

const Converter = () => {


    const formRef = useRef(null) 
    
    const [converted, setConverted] = useState([{}])
    const [typeConvert, setTypeConvert] = useState('')
    const [typeConverted, setTypeConverted] = useState('')
    const [valueConverted, setValueConverted] = useState(Number)
    const [valueIn, setValueIn] = useState(Number)

    
    useEffect(() => {
        api.get('/converter').then(response => {
            const valuesConverted = response.data.converter

            setConverted(valuesConverted)            
        })

    },[converted])

    useEffect(() => {
                apiRates.get(`/latest?base=${typeConvert}`).then(response => {
                    
                    const value = response.data.rates.BRL
                    setValueConverted(value)
                    //console.log("set"+value)

                })     

    }, [typeConverted])


    async function handleConvert(data) {
        
        if(data.valueInside === ''){
            alert("O campo valor está vazio")
            return
        }else if(data.typeConvert === data.typeConverted){
            alert("Os campos de tipo da conversão estão iguais")
            return
        }
        
        await apiRates.get(`/latest?base=${data.typeConvert}`).then(response => {
            let value
            if(data.typeConverted === 'BRL') {    
                value = response.data.rates.BRL
            } else if(data.typeConverted === 'USD') {
                    value = response.data.rates.USD
            } else if(data.typeConverted === 'CAD') {
                    value = response.data.rates.CAD
            }
        
        setValueConverted(value)
        
        data.valueOutside = value * data.valueInside
    })

    try {

           await api.post('/converter', data); //adicionei o await
        
     } catch (err) {
        console.log(err.response.error);
     }
    }
    
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
        <Form initialData={ {date: new Date()} } ref={formRef} onSubmit={handleConvert}>
             <div id="valor"> 
                 <span>Valor</span>
                 <Input name="valueInside" type="text" placeholder="0,00"/>

             </div>

             <div id="de"> 
                 <span>Converter de</span>

                 <Select name="typeConvert">
                    <option value="BRL">Real(BRL)</option>
                    <option value="USD">Dólar dos Estados Unidos (USD)</option>
                    <option value="CAD">Dólar Canadense (CAD)</option>
                </Select>
             </div>

             <div id="para">
                 <span>Para</span>

                 <Select name="typeConverted">
                    <option value="BRL">Real(BRL)</option>
                    <option value="USD">Dólar dos Estados Unidos (USD)</option>
                    <option value="CAD">Dólar Canadense (CAD)</option>
                </Select>
             </div>

             <button type="submit" >
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