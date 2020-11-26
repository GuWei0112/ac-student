import React from 'react'
import {ReceiptListTitle, ReceiptList} from './ReceiptList.style'
import ReceiptItem from '../ReceiptItem/ReceiptItem.components'
import { Container } from '../Container'
export default ({ list }) => {
    return (
        <Container>
            {list.length > 0 &&
                <ReceiptListTitle>
                    <ReceiptList></ReceiptList>
                    <ReceiptList>姓名</ReceiptList>
                    <ReceiptList>今年年級</ReceiptList>
                    <ReceiptList>最後繳交日期</ReceiptList>
                </ReceiptListTitle>}
            {list.map(x => <ReceiptItem {...x} student={x} />)}
        </Container>
    )
}