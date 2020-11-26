import React from 'react'
import { BillItemContainer, BillItem, BillItemButton } from './BillItem.style'
import { withRouter } from 'react-router-dom'
export default withRouter(({ createDate, payDate, header, history, student, i}) => {
    const handleClick = () => {
        history.push(`/bill/record/${i}`, { student })
    }
    return (
        <BillItemContainer>
            <BillItem>{createDate}</BillItem>
            <BillItem>{payDate}</BillItem>
            {header ? <BillItem>功能</BillItem> : <BillItemButton className='fas fa-eye' onClick={handleClick} />}
        </BillItemContainer>
    )
})