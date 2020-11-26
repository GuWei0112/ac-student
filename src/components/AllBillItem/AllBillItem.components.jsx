import React from 'react'
import { BillButton, BillItem, BillItemContainer } from './AllBillItem.style'
import { withRouter } from 'react-router-dom'

export default withRouter(({
    name,
    grade,
    lastPaymentDate,
    student,
    history, flag }) => {
    const handleClick = (mode) => {
        switch (flag) {
            case 'search':
                history.push(`/bill/search/${mode}`, { student })
                break
            default:
                history.push(`/bill/record/${mode}`, { student })
                break
        }
    }
    return (
        <BillItemContainer>
            <BillItem>{name}</BillItem>
            <BillItem>{grade}</BillItem>
            <BillItem>{lastPaymentDate}</BillItem>
            {
                flag == 'search' ? <BillButton className='fas fa-clipboard-list' onClick={() => handleClick(student.paymentList.length - 1)} /> :
                    <BillButton className='fas fa-calendar-plus' onClick={() => handleClick('add')} />
            }
        </BillItemContainer>
    )
})
