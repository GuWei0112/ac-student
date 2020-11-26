import React from 'react'
import { HeaderContainer, HeaderLinkContainer, HeaderLink, HeaderBillContainer,HeaderBill,HeaderBillContent } from './Header.style'
export default () => <HeaderContainer>
    <HeaderLinkContainer>
        <HeaderLink to='/'>回首頁</HeaderLink>
        <HeaderLink to='/student'>學生資料</HeaderLink>
        <HeaderLink to='/lesson'>課程維護</HeaderLink>
        <HeaderBillContainer>
            <HeaderLink to='/bill'>
                繳費
            </HeaderLink>
                <HeaderBillContent>
                    <HeaderBill to='/bill/record'>應繳費明細</HeaderBill>
                    <HeaderBill to='/bill/receipt'>列印繳費明細</HeaderBill>
                    <HeaderBill to='/bill/report'>匯出合計總表</HeaderBill>
                </HeaderBillContent>
        </HeaderBillContainer>
    </HeaderLinkContainer>
</HeaderContainer>