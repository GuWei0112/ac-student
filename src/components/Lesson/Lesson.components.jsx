import React, { useState } from 'react'
import { LessonContainer, LessonItemContainer, LessonWrapper, LessonInput, LessonButton } from './Lesson.style'
import { useSelector } from 'react-redux'
export default ({ mode, handleSumbit, course, flag }) => {
    const Courses = useSelector(state => state.lesson.Courses)
    const [lesson, setLesson] = useState(course)
    const [pattern, setPattern] = useState(mode)
    const handleOnClick = (e, mode) => {
        e.preventDefault()
        setPattern('done')
        handleSumbit(mode, 'lessonList', lesson)
    }
    const selectedCourses = Courses.find(course => course.courseFeeId === lesson.courseFeeId)
    const handleOnChange = (e) => {
        setLesson({ ...lesson, courseFeeName: e.target.value })
    }

    const lessonRender = () => {
        switch (flag) {
            case 'student':
                return pattern === 'edit' || pattern === 'add' ?
                    <select value={selectedCourses?selectedCourses.courseFeeId:''} onChange={e => setLesson({ ...lesson, courseFeeId: e.target.value })}>
                        {Courses.map(l =>
                            <option value={l.courseFeeId}>{l.courseFeeName}</option>
                        )}
                    </select> : <LessonWrapper>{selectedCourses ? selectedCourses.courseFeeName : ''}</LessonWrapper>
            default:
                return pattern === 'edit' || pattern === 'add' ?
                    <LessonInput value={lesson ? lesson.courseFeeName : ''} onChange={(e) => handleOnChange(e)} /> :
                    <LessonWrapper>{selectedCourses ? selectedCourses.courseFeeName : ''}</LessonWrapper>
        }
    }

    const dateRender = (name) => {
        switch (flag) {
            case 'student':
                return pattern === 'edit' || pattern === 'add' ? <LessonInput value={lesson[name]} onChange={(e) => setLesson({ ...lesson, [name]: e.target.value })} /> : <LessonWrapper>{lesson[name]}</LessonWrapper>

            default:
                return []
        }
    }

    const buttonRender = () => {
        switch (flag) {
            case 'student':
                return pattern === 'edit' || pattern === 'add' ?
                <LessonButton className='fas fa-save' onClick={(e) => handleOnClick(e, 'save')}></LessonButton>
                :
                    pattern === 'view' ? [] : <LessonButton className='fas fa-pen' onClick={() => setPattern('edit')}></LessonButton>
            default:
                return (pattern === 'edit' || pattern === 'add') ? <LessonButton className='fas fa-save' onClick={(e) => handleOnClick(e, 'save')}></LessonButton>
                    :
                    pattern === 'view' ? [] : <LessonButton className='fas fa-pen' onClick={() => setPattern('edit')}></LessonButton>
        }
    }
    
    return (
        <LessonContainer>
            <LessonItemContainer flag={flag}>
                {lessonRender()}
                {dateRender('signUpStartMonth')}
                {dateRender('signUpEndMonth')}
                <LessonWrapper>
                    {buttonRender()}
                    {pattern === 'edit' || pattern === 'add' || pattern === 'done' ? <LessonButton className='fas fa-trash' onClick={e => handleOnClick(e, 'del')}></LessonButton> : []}
                </LessonWrapper>
            </LessonItemContainer>
        </LessonContainer>
    )
}