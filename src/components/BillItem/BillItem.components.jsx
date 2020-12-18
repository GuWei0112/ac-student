import React from 'react'
import { BillItemContainer, BillItem, BillItemButton } from './BillItem.style'
import { withRouter } from 'react-router-dom'
import {useDispatch} from 'react-redux'
export default withRouter(({ createDate, payDate, header, history, student, i}) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch({ type: 'INSERT_TEMP_STUDENT', payload: { TempStudent: student } })
        history.push(`/bill/record/${i}`)
    }
    return (
        <BillItemContainer>
            <BillItem>{createDate}</BillItem>
            <BillItem>{payDate}</BillItem>
            {header ? <BillItem>功能</BillItem> : <BillItemButton className='fas fa-eye' onClick={handleClick} />}
        </BillItemContainer>
    )
})