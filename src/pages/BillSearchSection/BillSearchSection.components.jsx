import React, { useEffect } from 'react'
import { BillSectionContainer, BillListContainer } from './BillSearchSection.style'
import { Container } from '../../components/Container'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
export default ({ name }) => {
    const dispatch = useDispatch()
    // const { student } = location.state
    const BillList = useSelector(state => state.bill.BillList)
    const Courses = useSelector(state => state.lesson.Courses)
    // useEffect(() => {
    //     dispatch({
    //         type: 'SEARCH_RECENT_BILL',
    //         payload: student
    //     })
    // }, [student])

    console.log(BillList)
    return (
        <Container>
            <BillSectionContainer>
                {BillList[0].stdntName} {BillList[0].grade}
                {
                    BillList.length > 0 ? BillList.map(x =>
                        <BillListContainer flag={x.payDate != '' ? 'done' : 'none'}>
                            <div>創立日期:{x.paymentCrDate}</div>
                            <div>繳交日期:{x.payDate}</div>
                            {x.payDate == '' && <button style={{}}>已繳費</button>}
                            <div style={{gridColumn: '1/4'}}>
                                {x.courseFeeList.length > 0 ? x.courseFeeList.map(y =>
                                    <div style={{display: 'grid', gridTemplateColumns:'repeat(4,1fr)'}}>
                                        <div>{Courses.find(x=>x.courseFeeId == y.courseFeeId).courseFeeName}</div>
                                        <div>{y.expenseMonthStart} - {y.expenseMonthEnd}</div>
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
}