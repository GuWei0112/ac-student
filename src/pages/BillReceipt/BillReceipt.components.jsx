import React, { useState } from 'react'
import { Container } from '../../components/Container'
import SearchBar from '../../components/SearchBar/SearchBar.components'
import ReceiptList from '../../components/ReceiptList/ReceiptList.components'
import example from '../../util/example'
import { ReceiptButton } from './BillReceipt.style'
import POST_API from '../../api/default'
//import {remote} from 'electron'
export default () => {
    const [list, setList] = useState([])
    const [selectedStd, setSelectedStd] = useState([])

    const handleSearch = (grade, student) => {
        let g = grade === '全部' ? '' : example.eduLevel.find(edu => edu.title == grade).id
        POST_API('/academy03/06', { grade: g, name: student }).then(result => {
            console.log(result)
            if (result.data) {
                setList(result.data)
            }
        })
    }

    const handleOnCheck = (checked,stndId) => {
        if (checked){
            console.log(stndId)
            selectedStd.push(stndId)
            setSelectedStd(selectedStd)
        }
    }
    
    const handlePrint = () => {
        POST_API('/academy04/01', { studentIdList: selectedStd.toString() }).then(result => {
            console.log(result)
        })
    }

    return (
        <Container>
            <SearchBar handleSearch={(grade, student) => handleSearch(grade, student)} mode={'BillReceipt'} />
            <ReceiptButton className='fa fa-print' onClick={handlePrint}/>
            <ReceiptList list={list} onCheck={(value,stdntId)=> handleOnCheck(value,stdntId)}/>
        </Container>
    )
}