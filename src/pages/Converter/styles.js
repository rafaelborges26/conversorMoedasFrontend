import React from 'react'
import styled from 'styled-components'


export const Container = styled.div`

    display: flex;
    align-items: stretch;
    flex-direction:column;
    margin: 120px;
` 

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
    align-items: center;

    p {
        font-size: 40px;
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