import React from 'react'
import { Container } from '../../components/Container'
import { LessonContainer } from './Lesson.style'
import AllLessonList from '../../components/AllLessonList/AllLessonList.components'

export default () => {
    return (
        <Container>
            <LessonContainer>
                <AllLessonList />
            </LessonContainer>
        </Container>
    )
}