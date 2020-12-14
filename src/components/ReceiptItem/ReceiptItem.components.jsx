import React from 'react'
import { ReceiptItemContainer, ReceiptItem, ReceiptText } from './ReceiptItem.style'
import { withRouter } from 'react-router-dom'

export default withRouter(({
    stdntId,
    name,
    grade,
    lastPaymentDate, onCheck }) => {

    return (
        <ReceiptItemContainer>
            <ReceiptText type='checkbox' onChange={e => onCheck(e, stdntId)} />
            <ReceiptItem>{name}</ReceiptItem>
            <ReceiptItem>{grade}</ReceiptItem>
            <ReceiptItem>{lastPaymentDate}</ReceiptItem>
        </ReceiptItemContainer>
    )
})
