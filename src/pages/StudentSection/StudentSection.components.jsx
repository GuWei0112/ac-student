import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Container } from '../../components/Container'
import { StudentSectionContainer, StudentSectionWrapper, StudentSectionLine } from './StudentSection.style'
import Input from '../../components/Input/Input.components'
import RadioButton from '../../components/RadioButton/RadioButton.components'
import example from '../../util/example'
import Button from '../../components/Button/Button.components'
import LessonList from '../../components/LessonList/LessonList.components'
import POST_API from '../../api/default'
import { useDispatch } from 'react-redux'
export default withRouter(({ match, location, history }) => {
    const dispatch = useDispatch()
    const [student, setStudent] = useState(location.state ? location.state.student : {})
    const { mode } = match.params
    const handleOnChange = (name, value) => {
        setStudent({ ...student, [name]: value })
    }
    const handleLessonOnChange = (mode, index, name, value) => {
        if (mode === 'new') {
            if (student.courseFeeList)
                setStudent({ ...student, courseFeeList: [...student.courseFeeList, { [name]: value }] })
            else
                setStudent({ ...student, courseFeeList: [{ [name]: value }] })
        }
        else if (mode === 'save') {
            student.courseFeeList.forEach(x => student.courseFeeList[index] = value)
            setStudent({ ...student, student })
        }
        else if (mode === 'edit') {
            student.courseFeeList.forEach(x => student.courseFeeList[index] = value)
            setStudent({ ...student, student })
        }
        else {
            student.courseFeeList = student.courseFeeList.filter((x, i) => i !== index)
            setStudent({ ...student, student })
        }
    }
    const changeTitle = (mode) => {
        switch (mode) {
            case 'add':
                return '新增學生資料'
            case 'edit':
                return '編輯學生資料'
            case 'view':
                return '檢視學生資料'
            default:
                return ''
        }
    }

    const handleSaveStudent = (mode) => {
        if (mode === 'add') {
            student.newNote = student.newNote === '1' ? true : false
            student.leaveNote = student.leaveNote === '1' ? true : false
            student.handoutExemption = student.handoutExemption === '1' ? true : false
            student.engDiscount = student.engDiscount === '1' ? true : false
            student.mathDiscount = student.mathDiscount === '1' ? true : false
            student.newDate = new Date()
            POST_API('/academy01/02', { ...student, courseFeeList: student.courseFeeList ? student.courseFeeList : [] }).then(({ data }) => {
                // dispatch({ type: 'ADD_STUDENT', payload: { Student: student } })
            })
        }
        else if (mode === 'edit') {
            student.newNote = student.newNote === '1' ? true : false
            student.leaveNote = student.leaveNote === '1' ? true : false
            student.handoutExemption = student.handoutExemption === '1' ? true : false
            student.engDiscount = student.engDiscount === '1' ? true : false
            student.mathDiscount = student.mathDiscount === '1' ? true : false
            student.newDate = new Date()
            POST_API('/academy01/02', { ...student, courseFeeList: student.courseFeeList ? student.courseFeeList : [] }).then(() => {
                // dispatch({ type: 'EDIT_STUDENT', payload: { Student: student } })
            })
        }
        dispatch({ type: 'CLEAN_STUDENT', payload: {} })
        history.push('/student')
    }
    let disabled = mode === 'view' ? true : false
    return (
        <Container>
            <StudentSectionContainer>
                <StudentSectionWrapper>{changeTitle(mode)}</StudentSectionWrapper>
                {example.studentType.map(x => {
                    if (x.type === 'text')
                        return (<Input {...x} disabled={disabled}
                            handleOnChange={(name, value) => handleOnChange(name, value)} value={student ? student[x.name] : ''} />)
                    else
                        return (<RadioButton {...x} disabled={disabled}
                            handleOnChange={(name, value) => handleOnChange(name, value)} value={student[x.name] ? student[x.name] : false} />)
                })}

                <LessonList courses={student.courseFeeList ? student.courseFeeList : []}
                    handleSumbit={(mode, i, name, value) => handleLessonOnChange(mode, i, name, value)} mode={mode} flag={'student'} />
                <StudentSectionLine></StudentSectionLine>
                {mode === 'edit' || mode === 'add' ?
                    <React.Fragment>
                        <Button title={'儲存'} handleSubmit={() => { handleSaveStudent(mode) }} />
                        <Button title={'取消'} handleOnClick={() => { history.push('/student') }} />
                    </React.Fragment>
                    :
                    <Button style={{ gridColumn: '1/3' }} title={'返回'} handleOnClick={() => { history.push('/student') }} />
                }
            </StudentSectionContainer>
        </Container>
    )
})