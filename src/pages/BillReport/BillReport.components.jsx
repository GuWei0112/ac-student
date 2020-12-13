import React, { useState } from 'react'
import { Container } from '../../components/Container'
import ReportBar from '../../components/ReportBar/ReportBar.components'
import SearchList from '../../components/SearchList/SearchList.components'
import example from '../../util/example'
import {GET_API} from '../../api/default'
export default () => {

    const handleSearch = (grade, month) => {
        let g = grade === '全部' ? '' : example.eduLevel.find(edu => edu.title == grade).id
        g = '5'
        month = '12'
        GET_API(`/academy05/01/${g}/${month}/1`).then(result=>{
            console.log(result)
            if(result.data = 'success'){
                window.open(`http://localhost:8080/academy05/01/${g}/${month}/2`)
            }
        })
    }
    return (
        <Container>
            <ReportBar handleSearch={(grade, month) => handleSearch(grade, month)} mode={'Student'}/>
        </Container>
    )
}