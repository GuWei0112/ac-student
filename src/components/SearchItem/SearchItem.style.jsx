import styled from 'styled-components'

export const SearchItemContainer = styled.div`
display: grid;
grid-template-columns: repeat(5,1fr) repeat(2,40px);
width: 60%;
margin: auto;
margin-top: 10px;
background-color: white;
border-radius: 20px;
align-items: center;
`

export const SearchItem =styled.div`

`

export const SearchButton = styled.i`
cursor: pointer;
`