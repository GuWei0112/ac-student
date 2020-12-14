import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '../../components/Container'
import SearchBar from '../../components/SearchBar/SearchBar.components'
import SearchList from '../../components/SearchList/SearchList.components'
import { StudentButton } from './Student.style'
import POST_API from '../../api/default'
import example from '../../util/example'
export default () => {
    const dispatch = useDispatch()
    const Student = useSelector(state => state.student.Student)

    const handleSearch = (grade, student) => {
        let g = grade === '全部' ? '' : example.eduLevel.find(edu => edu.title === grade).id
        POST_API('/academy01/01', { grade: g, name: student }).then(result => {
            dispatch({ type: 'SEARCH_STUDENT', payload: { Student: result.data } })
        })
    }

    const updateGrade = () => {
        POST_API('/academy01/03', {}).then(result => {
            dispatch({ type: 'EDIT_STUDENT_GRADE' })
        })
    }

    return (
        <Container>
            <SearchBar handleSearch={(grade, student) => handleSearch(grade, student)} mode={'Student'} />
            <StudentButton onClick={updateGrade}>年級調整</StudentButton>
            <SearchList list={Student} />
        </Container>
    )
}