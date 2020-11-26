import React, { useState } from 'react'
import {
    SearchBarContainer, SearchBarInputContainer, SearchDropdownContent,
    SearchBarInput, SearchDropdownContainer,
    SearchDropdown, SearchDropdownButton,
    SearchButton
} from './ReportBar.style'
import { withRouter } from 'react-router-dom'
import example from '../../util/example'
export default withRouter(({ handleSearch, history, mode }) => {
    const [grade, setGrade] = useState('全部')
    const [month, setMonth] = useState('一月')
    const [student, setStudent] = useState('')
    const handleOnClick = (mode, value) => {
        if (mode === 'grade')
            setGrade(value)
        else
            setMonth(value)
    }
    return (
        <SearchBarContainer>
            <SearchBarInputContainer>
                <SearchDropdownContainer>
                    {grade}
                    <SearchDropdownButton className="fas fa-angle-up" />
                    <SearchDropdownContent>
                        {
                            example.eduLevel.map((x,i) =>
                                <SearchDropdown >
                                    <input type='checkbox'/>
                                    {/* {<SearchDropdown onClick={() => handleOnClick('grade', x.title)}></SearchDropdown>} */}
                                    {x.title}
                                </SearchDropdown>)
                        }
                    </SearchDropdownContent>
                </SearchDropdownContainer>
                <SearchDropdownContainer>
                    {month}
                    <SearchDropdownButton className="fas fa-angle-up" />
                    <SearchDropdownContent>
                        {
                            ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'].map(x => <SearchDropdown onClick={() => handleOnClick('month', x)}>{x}</SearchDropdown>)
                        }
                    </SearchDropdownContent>
                </SearchDropdownContainer>
                {/* <SearchBarInput onChange={e => setStudent(e.target.value)} value={student} /> */}
                <SearchButton className="fas fa-search" onClick={() => handleSearch(grade, student)} />
            </SearchBarInputContainer>
        </SearchBarContainer>
    )
})