import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
background-color: #3a5465;
width: 80%;
margin: auto;
height: 10vh;
border-radius: 5px 5px 20px 20px;
box-shadow: 1px 5px 1px 5px rgba(0, 0, 0, 0.2);
`

export const HeaderLinkContainer = styled.div`
padding: 15px;
`
export const HeaderBillContent = styled.div`
display: none;
position: absolute;
border-radius: 20px;
top: 23px;
z-index: 1;
`

export const HeaderBill = styled(Link)`
text-decoration: none;
color:white;
display: block;
width: 100px;
height: 20px;
position: relative;
padding: 10px;
&:nth-child(1) {
    padding-top: 10px;
}
padding-top: 0px;
margin-left: 620px;
background-color: #3a5465;
cursor: pointer;

&:hover {
    color: white;
    opacity: 0.8;
}
z-index: 2;
`

export const HeaderBillContainer =styled.div`
display: inline;
background-color: #3a5465;
margin: auto;
height: 10px;

position: relative;

color: white;
top: 0.5px;
&:hover ${HeaderBillContent} {
    display: block;
}
`


export const HeaderLink = styled(Link)`
margin: 0px 20px;
text-decoration: none;

color: white;
&:hover {
    border-bottom: 1px solid white;
}

`

export const HeaderHomeLink = styled(Link)`

`

