import React, { useEffect } from 'react'
import { HeaderContainer, HeaderLinkContainer, HeaderLink, HeaderBillContainer, HeaderBill, HeaderBillContent } from './Header.style'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import POST_API from '../../api/default'
export default withRouter(({ history }) => {
    const dispatch = useDispatch()
    const ChangePage = (e, value, url) => {
        e.preventDefault()
        dispatch({ type: 'CHANGE_PAGE', payload: value })
        history.push(`${url}`)
    }

    useEffect(() => {
        POST_API('/academy02/01', {}).then((result) => {
            if(result)
            dispatch({ type: 'SEARCH_LESSONS', payload:{Courses: result.data }})
        })
    }, [])
    return (
        <HeaderContainer>
            <HeaderLinkContainer>
                <HeaderLink onClick={e => ChangePage(e, 'home', '/')}>回首頁</HeaderLink>
                <HeaderBillContainer>
                    {/* <HeaderLink onClick={e => ChangePage(e, 'student', '/student')}>學生資料</HeaderLink> */}
                    <HeaderLink onClick={e => ChangePage(e, 'student', '/student')}>學生資料</HeaderLink>
                    <HeaderBillContent flag>
                        <HeaderBill flag onClick={e => ChangePage(e, 'studentRecord', '/student/record')}>匯出學生資料總表</HeaderBill>
                    </HeaderBillContent>
                </HeaderBillContainer>
                <HeaderLink onClick={e => ChangePage(e, 'lesson', '/lesson')}>課程維護</HeaderLink>
                <HeaderBillContainer>
                    <HeaderLink onClick={e => ChangePage(e, 'bill', '/bill')}>繳費</HeaderLink>
                    <HeaderBillContent>
                        <HeaderBill onClick={e => ChangePage(e, 'search', '/bill/search')}>繳費紀錄</HeaderBill>
                        <HeaderBill onClick={e => ChangePage(e, 'record', '/bill/record')}>應繳費明細</HeaderBill>
                        <HeaderBill onClick={e => ChangePage(e, 'receipt', '/bill/receipt')}>列印繳費明細</HeaderBill>
                        <HeaderBill onClick={e => ChangePage(e, 'report', '/bill/report')}>匯出合計總表</HeaderBill>
                    </HeaderBillContent>
                </HeaderBillContainer>
            </HeaderLinkContainer>
        </HeaderContainer>
    )
})