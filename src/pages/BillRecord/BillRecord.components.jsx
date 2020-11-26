import React,{useState} from 'react'
import { Container } from '../../components/Container'
import SearchBar from '../../components/SearchBar/SearchBar.components'
import BillList from '../../components/AllBillList/AllBillList.components'
import example from '../../util/example'
import POST_API from '../../api/default'
export default () => {
    const [list, setList] = useState([])

    const handleSearch = (grade, student) => {
        let g = grade === '全部' ? '' : grade
        setList(example.student.filter(x => x.name.includes(student) && x.grade.includes(g)))
    }
    return (
        <Container>
            <SearchBar handleSearch={(grade, student) => handleSearch(grade, student)} mode={'BillRecord'}/>
            <BillList list={list} />
        </Container>
    )
}