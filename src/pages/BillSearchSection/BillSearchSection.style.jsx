import styled from 'styled-components'

export const BillSectionContainer = styled.div`
    background: white;
    width: 60%;
    text-align: center;
    margin: auto;
    border-radius: 10px;
    padding: 5px;
`

export const BillListContainer =styled.div`
    background: ${props => props.flag === 'done'? '#64a97b':'#B15353'};
    margin: auto;
    margin-bottom: 5px;
    width: 80%;
    border-radius: 5px;
    padding: 5px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
`

export const BillListButton = styled.i`
margin: 5px;
`