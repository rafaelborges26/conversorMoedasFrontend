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
        font-weight: bold;
        color: #3A3A3A;
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

    

    width: 100%;

    Form {
        display: flex;
        flex: 1;
    }

    div {
        display: flex;
        flex-direction: column;
        margin-left: 0px;

        span {
            font-size: 24px;
            margin-bottom: 12px;
            margin-left: 20px;
        }


        & + div {
            margin: 0 20px 0 20px;
            
        }
    }

    button {
        margin-top: 24px;
    }

    div {
            margin: 0 20px 0 20px;
        }

` 

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    h3 {
        font-size: 18px;
        color: #3A3A3A;
        margin-top: 4px;
    }

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
                font-weight: normal;
                
            }
            
        }

    }

`