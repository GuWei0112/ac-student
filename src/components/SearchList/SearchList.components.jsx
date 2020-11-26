import React from 'react'
import { Container } from '../Container'
import {SearchListTitle, SearchList} from './SearchList.style'
import SearchItem from '../SearchItem/SearchItem.components'

export default ({ list }) => {
    return (
        <Container>
            {list.length > 0 &&
                <SearchListTitle>
                        <SearchList>姓名</SearchList>
                        <SearchList>新生註記</SearchList>
                        <SearchList>離校註記</SearchList>
                        <SearchList>今年年級</SearchList>
                        <SearchList>最後繳交日期</SearchList>
                        <SearchList>功能</SearchList>
                    </SearchListTitle>}
            {list.map(x => <SearchItem {...x} student={x}/>)}
        </Container>
    )
}