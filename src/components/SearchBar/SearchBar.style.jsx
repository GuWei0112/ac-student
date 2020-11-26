import styled from 'styled-components'

export const SearchBarContainer = styled.div`
`

export const SearchBarInputContainer = styled.div`
margin: auto;
border-radius: 20px;
background-color: #3a5465;
width: 30%;
height: 30px;
padding: 10px;
`
export const SearchBarInput = styled.input`
background: transparent;
border: none;
width: 40%;
outline: none;
height: 20px;
margin-top: 5px;
left: 30px;
font-size: 20px;
border-bottom: 1px solid white;
`

export const SearchDropdownContent = styled.div`
display: none;
position: absolute;
border-radius: 20px;
top: 40px;
z-index: 1;
`


export const SearchDropdownButton = styled.i`
padding-left: 5px;
margin-left: 5px;
cursor: pointer;
`

export const SearchDropdownContainer = styled.div`
display: inline;
background-color: #3a5465;
margin: auto;
padding: 10px 10px;
padding-left: 5px;
height: 10px;
font-size: 20px;
position: relative;

color: white;
top: 0.5px;

&:hover ${SearchDropdownContent} {
    display: block;
}

&:hover ${SearchDropdownButton} {
    &::before {
        content: "\f107";
    }
}
`

export const SearchDropdown = styled.div`
display: block;
width: 100px;
height: 20px;
position: relative;
padding: 10px;
&:nth-child(1) {
    padding-top: 10px;
}
padding-top: 0px;
margin-left: 12px;
background-color: #3a5465;
cursor: pointer;

&:hover {
    color: white;
    opacity: 0.8;
}
`

export const SearchButton = styled.i`
padding-left: 5px;
margin-left: 5px;
cursor: pointer;
color: white;
`
