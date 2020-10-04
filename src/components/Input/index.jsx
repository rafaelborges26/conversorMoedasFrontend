import React, { useEffect, useState, useRef, useCallback} from 'react'
import { Container, Error } from './styles'
import { useField } from '@unform/core'

const Input = ({name, ...rest}) => {
    const inputRef = useRef(null)
    
    
    const { fieldName, defaultValue, registerField } = useField(name) //o nome do campo, obtenho das propriedades do InputProps

    
    useEffect(() => {
        registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value', 
        })
    },[fieldName, registerField])

    return (
    <Container>
        
        <input 
            defaultValue={defaultValue} 
            ref={inputRef} 
            {...rest}  
        /> 
        
        
    </Container>
) 

}

export default Input