import React from 'react'
import { Container } from '../../components/Container'
import ReportBar from '../../components/ReportBar/ReportBar.components'
import example from '../../util/example'
import { GET_API } from '../../api/default'
export default () => {

    const handleSearch = (grade, month) => {
        let g = example.studentLevel.find(edu => edu.title === grade).id
        let m = example.month.find(x => x.value === month).id
        GET_API(`/academy05/01/${g}/${m}/1`).then(result => {
            if (result && result.data === 'success') {
                window.open(`http://localhost:8080/angel/academy05/01/${g}/${m}/2`)
            } else 
                alert('查無資料')
        })
    }
    return (
        <Container>
            <ReportBar handleSearch={(grade, month) => handleSearch(grade, month)} mode={'BillReport'} />
        </Container>
    )
}