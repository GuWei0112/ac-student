import React,{useState} from 'react'
import { Container } from '../../components/Container'
import SearchBar from '../../components/SearchBar/SearchBar.components'
import BillList from '../../components/AllBillList/AllBillList.components'
import example from '../../util/example'
import POST_API from '../../api/default'
export default () => {
    const [list, setList] = useState([])

    const handleSearch = (grade, student) => {
        let g = grade === '全部' ? '' : example.eduLevel.find(edu => edu.title === grade).id
        POST_API('/academy03/02', { grade: g, name: student }).then(result => {
            // POST_API('/academy03/01', { paymentMonth, name: student }).then(result => {
                if(result.data){
                    setList(result.data)
                }
                // dispatch({ type: 'SEARCH_STUDENT_BILL_LIST', payload: { BillList: [result.data] } })
            })
    }
    return (
        <Container>
            <SearchBar handleSearch={(grade, student) => handleSearch(grade, student)} mode={'BillRecord'}/>
            <BillList list={list} />
        </Container>
    )
}