import styled from 'styled-components'

export const BillContainer = styled.div`
grid-column: 1/3;

`

export const BillWrapper = styled.div`
display: grid;
grid-template-columns: ${props=>props.mode?'repeat(6,1fr)':'repeat(5,1fr)'};
`

export const BillTitle = styled.div`
grid-column: 1/4;
`
export const Bill = styled.div`
`

export const BillHr = styled.div`
border-bottom: 1px solid black;
width: 90%;
padding: 5px 10px;
margin: auto;
grid-column:${props=>props.mode?'1/7':'1/6'};
`

export const BillButton = styled.i`
padding: 5px;
`

export const BillInput = styled.input`
width: 80%;
`