import React from 'react'
import Lesson from '../Lesson/Lesson.components'
import { useSelector, useDispatch } from 'react-redux'
import { AllLessonContainer, AllLessonAddButton } from './AllLessonList.style'
import POST_API from '../../api/default'
export default () => {
    const dispatch = useDispatch()
    const Courses = useSelector(state => state.lesson.Courses)

    const handleSumbit = (mode, index, lesson) => {
        if (mode === 'new') {
            dispatch({ type: 'ADD_LESSON', payload: { ...lesson, insertOrDelete: 'I' } })
        }
        else if(mode==='save'){
            POST_API('/academy02/02', {...lesson, insertOrDelete:'I'}).then(({ data }) => {
                dispatch({ type: 'EDIT_LESSON', payload: { index, value: lesson } })
            })
        }
        else if (mode === 'edit')
            dispatch({ type: 'EDIT_LESSON', payload: { value: lesson, index } })
        else {
            POST_API('/academy02/02', { ...lesson, insertOrDelete: 'D' }).then(({ data }) => {
                dispatch({ type: 'DELETE_LESSON', payload: { index } })
            })
        }
    }
    return (
        <AllLessonContainer>
            課程清單
            <AllLessonAddButton className="fas fa-plus" onClick={() => handleSumbit('new', 0, { courseFeeId: Courses[Courses.length - 1].courseFeeId++, courseFeeName: '' })}></AllLessonAddButton>
            {Courses.map((x, index) => <Lesson course={x}
                handleSumbit={(mode, lessonList, lesson) => handleSumbit(mode, index, lesson)} mode={x.courseFeeName != '' ? 'done' : 'add'} />)}
        </AllLessonContainer>
    )
}