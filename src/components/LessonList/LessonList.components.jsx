import React, { useEffect } from 'react'
import { LessonListContainer, LessonAddButton } from './LessonList.style'
import Lesson from '../Lesson/Lesson.components'
import { useSelector} from 'react-redux'
export default ({ handleSumbit, mode, courses, flag }) => {
    const Courses = useSelector(state => state.lesson.Courses)
    return (
        <LessonListContainer>
            課程清單
            {(mode === 'edit' || mode === 'add') && <LessonAddButton className="fas fa-plus" onClick={() => handleSumbit('new', 0, 'name', Courses[0].name)}></LessonAddButton>}
            {courses.map((course, i) => <Lesson
                flag={flag}
                handleSumbit={(mode, name, value) => handleSumbit(mode, i, name, value)} mode={mode} course={course} />)}

        </LessonListContainer>
    )
}