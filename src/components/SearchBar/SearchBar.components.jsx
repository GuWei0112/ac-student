import React, { useState } from 'react'
import {
    SearchBarContainer, SearchBarInputContainer, SearchDropdownContent,
    SearchBarInput, SearchDropdownContainer,
    SearchDropdown, SearchDropdownButton,
    SearchButton
} from './SearchBar.style'
import { withRouter } from 'react-router-dom'
import example from '../../util/example'
export default withRouter(({ handleSearch, history, mode }) => {
    const [grade, setGrade] = useState('全部')
    const [student, setStudent] = useState('')
    const [month, setMonth] = useState('一月')
    const handleOnClick = (flag, value) => {
        switch (flag) {
            case 'grade':
                setGrade(value)
                break
            case 'month':
                setMonth(value)
                break
        }
    }

    const handleAddStudent = () => {
        history.push('/student/add')
    }
    return (
        <SearchBarContainer>
            <SearchBarInputContainer>
                {mode !== 'BillSearch' &&
                    <SearchDropdownContainer>
                        {grade}
                        <SearchDropdownButton className="fas fa-angle-up" />
                        <SearchDropdownContent>
                            {
                                example.eduLevel.map(x => <SearchDropdown onClick={() => handleOnClick('grade', x.title)}>{x.title}</SearchDropdown>)
                            }
                        </SearchDropdownContent>
                    </SearchDropdownContainer>
                }
                {mode === 'BillSearch' &&
                    <SearchDropdownContainer>
                        {month}
                        <SearchDropdownButton className="fas fa-angle-up" />
                        <SearchDropdownContent>
                            {
                                example.month.map(x => <SearchDropdown onClick={() => handleOnClick('month', x.value)}>{x.value}</SearchDropdown>)
                            }
                        </SearchDropdownContent>
                    </SearchDropdownContainer>
                }
                <SearchBarInput onChange={e => setStudent(e.target.value)} value={student} />
                <SearchButton className="fas fa-search" onClick={() => handleSearch(grade, student, month)} />
                {mode === 'Student' && <SearchButton className="fas fa-plus" onClick={() => handleAddStudent()} />}
            </SearchBarInputContainer>
        </SearchBarContainer>
    )
})