import styled from 'styled-components'

export const ReceiptItemContainer = styled.div`
display: grid;
grid-template-columns: 50px repeat(3,1fr);
width: 60%;
margin: auto;
margin-top: 10px;
background-color: white;
border-radius: 20px;
align-items: center;
`

export const ReceiptItem =styled.div`

`

export const ReceiptText = styled.input`
margin: auto;
`