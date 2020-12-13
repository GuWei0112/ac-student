import React from 'react'
import {ReceiptItemContainer, ReceiptButton, ReceiptItem, ReceiptText} from './ReceiptItem.style'
import { withRouter } from 'react-router-dom'

export default withRouter(({
    stdntId,
    name,
    grade,
    lastPaymentDate,
    student,
    history, onCheck }) => {

    const handleClick = (mode) => {
        history.push(`/bill/record/${mode}`, { student })
    }
    return (
        <ReceiptItemContainer>
            <ReceiptText type='checkbox' onChange={e=> onCheck(e, stdntId)}/>
            <ReceiptItem>{name}</ReceiptItem>
            <ReceiptItem>{grade}</ReceiptItem>
            <ReceiptItem>{lastPaymentDate}</ReceiptItem>
        </ReceiptItemContainer>
    )
})
