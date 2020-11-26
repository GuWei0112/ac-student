import styled from 'styled-components'

export const LessonContainer = styled.div`
grid-column: 1/3;
`

export const LessonItemContainer = styled.div`
display: grid;
grid-template-columns: ${props => props.flag === 'student'? 'repeat(4,1fr)':'repeat(2,1fr)'};
padding: 10px;
`

export const LessonInput = styled.input`
width: 80%;
margin: auto;
`

export const LessonWrapper = styled.div`
`

export const LessonButton = styled.i`
margin-left: 10px;
`

