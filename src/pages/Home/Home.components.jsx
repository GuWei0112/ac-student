import React from 'react'
import Card from '../../components/Card/Card.components'
import example from '../../util/example'
import { HomeContainer } from './Home.style'
export default () => {
    return (
        <HomeContainer>
            {
                example.menu.map(x => <Card title={x.title} key={x.id} link={x.link} />)
            }
        </HomeContainer>
    )
}