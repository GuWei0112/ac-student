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
    const [grade, setGrade] = useState(mode === 'BillSearch' ? '國小' : '全部')
    const [student, setStudent] = useState('')
    const [month, setMonth] = useState('一月')
    const [year, setYear] = useState(new Date().getFullYear())
    const handleOnClick = (flag, value) => {
        switch (flag) {
            case 'grade':
                setGrade(value)
                break
            case 'month':
                setMonth(value)
                break
            case 'year':
                setYear(value)
                break
            default:
                break
        }
    }

    const handleAddStudent = () => {
        history.push('/student/add')
    }
    return (
        <SearchBarContainer>
            <SearchBarInputContainer flag={mode === 'BillSearch'}>
                {mode === 'BillSearch' &&
                    <SearchDropdownContainer>
                        {year}年
                        <SearchDropdownButton className="fas fa-angle-up" />
                        <SearchDropdownContent style={mode === 'BillSearch' ? { marginLeft: '0.1vw' } : {}}>
                            {
                                example.year.map(x => <SearchDropdown onClick={() => handleOnClick('year', x.value)}>{x.value}年</SearchDropdown>)
                            }
                        </SearchDropdownContent>
                    </SearchDropdownContainer>
                }
                {mode === 'BillSearch' &&
                    <SearchDropdownContainer >
                        {month}
                        <SearchDropdownButton className="fas fa-angle-up" />
                        <SearchDropdownContent style={mode === 'BillSearch' ? { marginLeft: '5vw' } : {}}>
                            {
                                example.monthSearch.map(x => <SearchDropdown style={{}} onClick={() => handleOnClick('month', x.value)}>{x.value}</SearchDropdown>)
                            }
                        </SearchDropdownContent>
                    </SearchDropdownContainer>
                }
                {
                    <SearchDropdownContainer>
                        {grade}
                        <SearchDropdownButton className="fas fa-angle-up" />
                        <SearchDropdownContent style={mode === 'BillSearch' ? { marginLeft: '10vw' } : {}}>
                            {
                                mode === 'BillSearch' ?
                                    example.studentLevel.map(x => <SearchDropdown onClick={() => handleOnClick('grade', x.title)}>{x.title}</SearchDropdown>)
                                    :
                                    example.eduLevel.map(x => <SearchDropdown onClick={() => handleOnClick('grade', x.title)}>{x.title}</SearchDropdown>)
                            }
                        </SearchDropdownContent>
                    </SearchDropdownContainer>
                }

                <SearchBarInput onChange={e => setStudent(e.target.value)} value={student} style={{ color: 'white' }} />
                <SearchButton className="fas fa-search" onClick={() => handleSearch(grade, student, month, year)} />
                {mode === 'Student' && <SearchButton className="fas fa-plus" onClick={() => handleAddStudent()} />}
            </SearchBarInputContainer>
        </SearchBarContainer>
    )
})