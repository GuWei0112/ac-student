import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Container } from '../../components/Container'
import ReportBar from '../../components/ReportBar/ReportBar.components'
import POST_API from '../../api/default'
import example from '../../util/example'
export default () => {
    const dispatch = useDispatch()

    const handleSearch = (grade, student) => {
        let g = grade === '全部' ? '' : example.eduLevel.find(edu => edu.title == grade).id
        POST_API('/academy06/01', { grade: g, student }).then(result => {
            dispatch({ type: 'EXPORT_STUDENT_GRADE' })
        })
    }
    return (
        <Container>
            <ReportBar handleSearch={(grade, student) => handleSearch(grade, student)} mode={'Student'} />
        </Container>
    )
}