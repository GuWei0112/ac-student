import React,{useState} from 'react'
import {Container} from '../../components/Container'
import SearchBar from '../../components/SearchBar/SearchBar.components'
import ReceiptList from '../../components/ReceiptList/ReceiptList.components'
import example from '../../util/example'
import {ReceiptButton} from './BillReceipt.style'
//import {remote} from 'electron'
export default () => {
    const [list, setList] = useState([])

    const handleSearch = (grade, student) => {
        let g = grade === '全部' ? '' : grade
        setList(example.student.filter(x => x.name.includes(student) && x.grade.includes(g)))
    }
    
    const testClose = () => {
       // var window = remote.getCurrentWindow()
        //window.close()
    }
    return (
        <Container>
            <SearchBar handleSearch={(grade, student) => handleSearch(grade, student)} mode={'BillReceipt'}/>
            <ReceiptButton className='fa fa-print'/>
            <ReceiptList list={list} onClick={testClose}/>
        </Container>
    )
}