import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const CardContainer = styled(Link)`
height: 300px;
width: 200px;
border: 1px solid #d4ed9d;
margin: auto;
margin-top: 100px;
border-radius: 5px;
cursor: pointer;
text-decoration: none;
color: white;
background-color: #3a5465;
&:hover {
    background-color: #d4ed9d;
}
`

export const CardTitleContainer = styled.div`
margin: auto;
margin-top: 134px;
`