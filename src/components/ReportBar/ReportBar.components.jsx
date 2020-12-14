import React, { useState } from 'react'
import {
    SearchBarContainer, SearchBarInputContainer, SearchDropdownContent,
    SearchDropdownContainer, SearchDropdown, SearchDropdownButton,
    SearchButton
} from './ReportBar.style'
import { withRouter } from 'react-router-dom'
import example from '../../util/example'
export default withRouter(({ handleSearch, mode }) => {
    const [grade, setGrade] = useState('國小')
    const [month, setMonth] = useState('一月')
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
                            example.studentLevel.map((x, i) =>
                                <SearchDropdown onClick={() => handleOnClick('grade', x.title)}>{x.title}</SearchDropdown>
                            )
                        }
                    </SearchDropdownContent>
                </SearchDropdownContainer>
                {mode !== 'Student' &&
                    <SearchDropdownContainer>
                        {month}
                        <SearchDropdownButton className="fas fa-angle-up" />
                        <SearchDropdownContent>
                            {
                                example.month.map(x => <SearchDropdown onClick={() => handleOnClick('month', x.id)}>{x.value}</SearchDropdown>)
                            }
                        </SearchDropdownContent>
                    </SearchDropdownContainer>
                }
                <SearchButton className="fas fa-search" onClick={() => handleSearch(grade, month)} />
            </SearchBarInputContainer>
        </SearchBarContainer>
    )
})