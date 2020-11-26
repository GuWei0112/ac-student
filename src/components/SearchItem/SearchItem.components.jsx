import React from 'react'
import { SearchItemContainer, SearchItem, SearchButton } from './SearchItem.style'
import { withRouter } from 'react-router-dom'

export default withRouter(({
    name,
    newNote,
    leaveNote,
    grade,
    lastPaymentDate,
    student,
    history }) => {
    const handleClick = (mode) => {
        history.push(`/student/${mode}`, { student })
    }
    return (
        <SearchItemContainer>
            <SearchItem>{name}</SearchItem>
            {/* <SearchItem><SearchButton style={{ color: 'green' }} className={newNote ? 'fas fa-check' : 'fas fa-times'} /></SearchItem> */}
            <SearchItem><SearchButton style={{ color: 'red' }} className={leaveNote ? 'fas fa-check' : 'fas fa-times'} /></SearchItem>
            <SearchItem>{grade}</SearchItem>
            <SearchItem>{lastPaymentDate}</SearchItem>
            <SearchButton className='fas fa-eye' onClick={() => handleClick('view')} />
            <SearchButton className='fas fa-pen' onClick={() => handleClick('edit')} />
        </SearchItemContainer>
    )
})
