import React from 'react'
import {BillListContainer} from './BillList.style'
import BillItem from '../BillItem/BillItem.components'
export default ({ bills, student })=> {
    return(
        <BillListContainer>
            繳費明細
            <BillItem createDate={'立單日期'} payDate={'繳費日期'} header/>
            {bills.map((x,i)=><BillItem {...x} student={student} i={i}/>)}
        </BillListContainer>
    )
} 