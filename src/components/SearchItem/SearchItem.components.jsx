import React from 'react'
import { SearchItemContainer, SearchItem, SearchButton } from './SearchItem.style'
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { transferTWDate } from '../../util/date'
export default withRouter(({
    name,
    leaveNote,
    grade,
    lastPaymentDate,
    student,
    history }) => {
    const dispatch = useDispatch()
    const handleClick = (mode) => {
        console.log(student)
        student.birth = transferTWDate(student.birth)
        student.newDate = transferTWDate(student.newDate)
        student.leaveDate = transferTWDate(student.leaveDate)
        dispatch({ type: 'INSERT_TEMP_STUDENT', payload: { TempStudent: student } })
        history.push(`/student/${mode}`)
    }
    return (
        <SearchItemContainer>
            <SearchItem>{name}</SearchItem>
            {/* <SearchItem><SearchButton style={{ color: 'green' }} className={newNote ? 'fas fa-check' : 'fas fa-times'} /></SearchItem> */}
            {/* <SearchItem><SearchButton style={{ color: 'red' }} className={leaveNote ? 'fas fa-check' : 'fas fa-times'} /></SearchItem> */}
            <SearchItem>{grade}</SearchItem>
            <SearchItem>{lastPaymentDate}</SearchItem>
            <SearchButton className='fas fa-eye' onClick={() => handleClick('view')} />
            <SearchButton className='fas fa-pen' onClick={() => handleClick('edit')} />
        </SearchItemContainer>
    )
})
