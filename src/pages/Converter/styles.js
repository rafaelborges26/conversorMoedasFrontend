import React from 'react'
import styled, {css} from 'styled-components'


export const Container = styled.div`

    display: flex;
    align-items: stretch;
    flex-direction:column;
    margin: 80px;
` 

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
    align-items: center;

    p {
        font-size: 40px;
    }

    a {
        
        font-size: 20px;
        text-decoration: none;
        color: #a8a8b3;
        transition: color 0.2s; 
        
        &:hover {
            color: #666;
        }
    }
`

export const Content = styled.div`
    margin: 120px 80px 80px 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    div {
        display: flex;
        flex-direction: column;
        margin-left: 0px;

        input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border-radius: 5px 0 5px 0;
        color: #3a3a3a;

        &::placeholder {
            color: #a8a8b3;
        }
        
        }


        & + div {
            margin: 0 20px 0 20px;
            
        }
    }

    button {
        
    }

    div {
            margin: 0 20px 0 20px;
        }

` 

export const Section = styled.div`
    display: flex;
    
    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;
        flex-direction: column;
        

        li {

            span {
                font-size: 36;
                color: #3d3d4d;
            
            }

            strong {
                font-size: 36;
                color: #3d3d4d;
            }
            
        }

    }

`