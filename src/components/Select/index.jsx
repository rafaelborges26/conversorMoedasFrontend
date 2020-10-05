import React, { useEffect, useState, useRef, useCallback} from 'react'
import { Container } from './styles'
import { useField } from '@unform/core'

const Select = ({name, ...rest}) => {
    const selectRef = useRef(null)
    
    
    const { fieldName, defaultValue, registerField } = useField(name)

    
    useEffect(() => {
        registerField({
        name: fieldName,
        ref: selectRef.current,
        path: 'value', 
        })
    },[fieldName, registerField])

    return (
    <Container>
        
        <select 
            defaultValue={defaultValue} 
            ref={selectRef} 
            {...rest}  
        /> 
        
        
    </Container>
) 

}

export default Select