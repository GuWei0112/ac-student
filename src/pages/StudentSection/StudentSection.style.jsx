import styled from 'styled-components'

export const StudentSectionContainer = styled.div`
padding: 10px;
width: 50%;
margin: auto;
margin-top: 20px;
background-color: white;
border-radius: 10px;
display: grid;
grid-template-columns: repeat(2,1fr);
`

export const StudentSectionWrapper = styled.div`
grid-column: 1/3;
`

export const StudentSectionLine = styled.div`
grid-column: 1/3;
border-bottom: 1px solid grey;
margin: auto;
margin-bottom: 10px;
padding: 5px;
width: 90%;
`