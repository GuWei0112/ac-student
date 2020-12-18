import React from 'react'
import { BillButton, BillItem, BillItemContainer } from './AllBillItem.style'
import { withRouter } from 'react-router-dom'
import {useDispatch} from 'react-redux'
export default withRouter(({
    stdntName,
    grade,
    lastPaymentDate,
    student,
    history, flag }) => {
    const dispatch = useDispatch()
    const handleClick = (mode) => {
        switch (flag) {
            case 'search':
                dispatch({ type: 'INSERT_TEMP_STUDENT', payload: { TempStudent: student } })
                history.push(`/bill/search/${mode}`)
                break
            default:
                dispatch({ type: 'INSERT_TEMP_STUDENT', payload: { TempStudent: student } })
                history.push(`/bill/record/${mode}`)
                break
        }
    }
    return (
        <BillItemContainer>
            <BillItem>{stdntName}</BillItem>
            <BillItem>{grade}</BillItem>
            <BillItem>{lastPaymentDate}</BillItem>
            {
                flag === 'search' ? <BillButton className='fas fa-clipboard-list' onClick={() => handleClick(student.paymentList.length - 1)} /> :
                    <BillButton className='fas fa-calendar-plus' onClick={() => handleClick('add')} />
            }
        </BillItemContainer>
    )
})
