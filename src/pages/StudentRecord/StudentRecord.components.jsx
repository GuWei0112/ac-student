import React from 'react'
import { Container } from '../../components/Container'
import ReportBar from '../../components/ReportBar/ReportBar.components'
import {GET_API} from '../../api/default'
import example from '../../util/example'

export default () => {
    const handleSearch = (grade) => {
        let g = example.studentLevel.find(edu => edu.title === grade).id
        GET_API(`/academy06/01/${g}/1`).then(result=>{
            if(result.data === 'success'){
                window.open(`http://localhost:8080/angel/academy06/01/${g}/2`)
            } else {
                alert('查無資料')
            }
        })
    }
    return (
        <Container>
            <ReportBar handleSearch={(grade) => handleSearch(grade)} mode={'Student'} />
        </Container>
    )
}