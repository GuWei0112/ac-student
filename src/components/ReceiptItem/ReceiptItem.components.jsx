import React from 'react'
import {ReceiptItemContainer, ReceiptButton, ReceiptItem, ReceiptText} from './ReceiptItem.style'
import { withRouter } from 'react-router-dom'

export default withRouter(({
    name,
    grade,
    lastPaymentDate,
    student,
    history }) => {

    const handleClick = (mode) => {
        history.push(`/bill/record/${mode}`, { student })
    }
    return (
        <ReceiptItemContainer>
            <ReceiptText type='checkbox'/>
            <ReceiptItem>{name}</ReceiptItem>
            <ReceiptItem>{grade}</ReceiptItem>
            <ReceiptItem>{lastPaymentDate}</ReceiptItem>
        </ReceiptItemContainer>
    )
})
