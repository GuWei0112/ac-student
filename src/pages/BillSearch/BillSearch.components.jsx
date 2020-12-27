import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '../../components/Container'
import SearchBar from '../../components/SearchBar/SearchBar.components'
import BillSearchSection from '../BillSearchSection/BillSearchSection.components'
import example from '../../util/example'
import POST_API from '../../api/default'
export default () => {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useState({})
    const handleSearch = (grade, student, month, paymentYear) => {
        let g = example.studentLevel.find(edu => edu.title === grade).id
        var paymentMonth = example.month.find(m => m.value === month).id
        setSearchParams({grade, student, month, paymentYear})
        POST_API('/academy03/01', { paymentMonth, name: student, grade: g, paymentYear }).then(result => {
            if (result.data.length > 0) {
                result.data.forEach(x => {
                    x.mode = 'view'
                    x.receiving = x.receivingUnit ? x.receivingUnit : ''
                    return x
                })
                dispatch({ type: 'SEARCH_STUDENT_BILL_LIST', payload: { BillList: result.data } })
            }
            else alert('查無資料')
        })
    }
    const Bill = useSelector(state => state.bill.BillList)

    return (
        <Container>
            <SearchBar handleSearch={(grade, student, month, year) => handleSearch(grade, student, month, year)} mode={'BillSearch'} />
            {
                Bill.length > 0 &&
                <BillSearchSection name={''} search ={searchParams}/>
            }
        </Container>
    )
}