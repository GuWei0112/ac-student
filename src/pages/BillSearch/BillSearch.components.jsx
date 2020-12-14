import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '../../components/Container'
import SearchBar from '../../components/SearchBar/SearchBar.components'
import BillSearchSection from '../BillSearchSection/BillSearchSection.components'
import example from '../../util/example'
import POST_API from '../../api/default'
export default () => {
    const dispatch = useDispatch()
    const handleSearch = (grade, student, month) => {
        var paymentMonth = example.month.find(m => m.value === month).id
        POST_API('/academy03/01', { paymentMonth, name:student }).then(result => {
            if (result.data.stdntName) {
                dispatch({ type: 'SEARCH_STUDENT_BILL_LIST', payload: { BillList: [result.data] } })
            }
            else alert('查無資料')
        })
    }
    const Bill = useSelector(state => state.bill.BillList)
    return (
        <Container>
            <SearchBar handleSearch={(grade, student, month) => handleSearch(grade, student, month)} mode={'BillSearch'} />
            {
                Bill.length > 0 &&
                <BillSearchSection name={''} />
            }
        </Container>
    )
}