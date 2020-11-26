import React, { useEffect } from 'react'
import { BillSectionContainer, BillListContainer } from './BillSearchSection.style'
import { Container } from '../../components/Container'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
export default withRouter(({ location }) => {
    const dispatch = useDispatch()
    const { student } = location.state
    const BillList = useSelector(state => state.bill.BillList)
    useEffect(() => {
        dispatch({
            type: 'SEARCH_RECENT_BILL',
            payload: student
        })
    }, [student])

    console.log(BillList)
    return (
        <Container>
            <BillSectionContainer>
                {student.name}
                {
                    BillList.length > 0 ? BillList.map(x =>
                        <BillListContainer flag={x.payDate != '未繳費' ? 'done' : 'none'}>
                            <div>創立日期:{x.createDate}</div>
                            <div>繳交日期:{x.payDate}</div>
                            {x.payDate == '未繳費' && <button style={{}}>已繳費</button>}
                            <div style={{gridColumn: '1/4'}}>
                                {x.lessonList.length > 0 ? x.lessonList.map(y =>
                                    <div style={{display: 'grid', gridTemplateColumns:'repeat(4,1fr)'}}>
                                        <div>{y.name}</div>
                                        <div>{y.expenseSmonth} - {y.expenseEmonth}</div>
                                        <div>{y.expense}</div>
                                        <div>{y.remark}</div>
                                    </div>
                                ) : []}
                            </div>
                        </BillListContainer>) : []
                }
            </BillSectionContainer>
        </Container>
    )
})