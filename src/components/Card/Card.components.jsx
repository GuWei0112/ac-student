import React from 'react'
import {useDispatch} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { CardContainer, CardTitleContainer } from './Card.style'

export default withRouter(({ title, link, history }) => {
    const dispatch = useDispatch()
    const ChangePage = (e, url) => {
        e.preventDefault()
        dispatch({
            type: 'CHANGE_PAGE',
            payload: url
        })
        history.push(`/${url}`)
    }
    return (
        <CardContainer  onClick={e=> ChangePage(e,link)}>
            <CardTitleContainer>
                {title}
            </CardTitleContainer>
        </CardContainer>
    )
})