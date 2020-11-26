import styled from 'styled-components'

export const BillItemContainer = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr) repeat(1,40px);
width: 60%;
margin: auto;
margin-top: 10px;
background-color: white;
border-radius: 20px;
align-items: center;
`

export const BillItem =styled.div`

`

export const BillButton = styled.i`
cursor: pointer;
`