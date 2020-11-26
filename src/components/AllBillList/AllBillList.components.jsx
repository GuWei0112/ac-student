import React from 'react'
import { BillListTitle, BillList } from './AllBillList.style'
import AllBillItem from '../AllBillItem/AllBillItem.components'
import { Container } from '../Container'
export default ({ list, flag }) => {
    return (
        <Container>
            {list.length > 0 &&
                <BillListTitle>
                    <BillList>姓名</BillList>
                    <BillList>今年年級</BillList>
                    <BillList>最後繳交日期</BillList>
                    <BillList>功能</BillList>
                </BillListTitle>}
            {list.map(x => <AllBillItem {...x} student={x} flag={flag} />)}
        </Container>
    )
}