import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '../../components/Container'
import SearchBar from '../../components/SearchBar/SearchBar.components'
import BillList from '../../components/AllBillList/AllBillList.components'
import BillSearchSection from '../BillSearchSection/BillSearchSection.components'
import example from '../../util/example'
import POST_API from '../../api/default'
export default () => {
    const [list, setList] = useState([])
    const dispatch = useDispatch()
    const handleSearch = (grade, student, month) => {
        var paymentMonth = example.month.find(m => m.value == month).id
        paymentMonth = 10
        POST_API('/academy03/01', { paymentMonth, name: "段純貞" }).then(result => {
            console.log(result)
            // POST_API('/academy03/01', { paymentMonth, name: student }).then(result => {
            if (result.data)
                dispatch({ type: 'SEARCH_STUDENT_BILL_LIST', payload: { BillList: [result.data] } })
        })

        // dispatch({
        //     type: 'SEARCH_STUDENT_BILL_LIST',
        //     payload: {
        //         student, paymentMonth: grade
        //     }
        // })
        // let g = grade === '全部' ? '' : grade
        // setList(example.student.filter(x => x.name.includes(student) && x.grade.includes(g)))
    }
    const Bill = useSelector(state => state.bill.BillList)
    return (
        <Container>
            <SearchBar handleSearch={(grade, student, month) => handleSearch(grade, student, month)} mode={'BillSearch'} />
            {
                Bill.length > 0 &&
                <BillSearchSection name={''} />
            }
            {/* <BillList list={list} flag={'search'} /> */}
        </Container>
    )
}