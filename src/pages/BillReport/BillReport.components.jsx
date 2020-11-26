import React, { useState } from 'react'
import { Container } from '../../components/Container'
import ReportBar from '../../components/ReportBar/ReportBar.components'
import SearchList from '../../components/SearchList/SearchList.components'
import example from '../../util/example'
export default () => {
    const [list, setList] = useState([])

    const handleSearch = (grade, student) => {
        let g = grade === '全部' ? '' : grade
        setList(example.student.filter(x => x.name.includes(student) && x.grade.includes(g)))
    }
    return (
        <Container>
            <ReportBar handleSearch={(grade, student) => handleSearch(grade, student)} mode={'Student'}/>
        </Container>
    )
}