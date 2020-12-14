import React from 'react'
import Card from '../../components/Card/Card.components'
import example from '../../util/example'
import { HomeContainer } from './Home.style'
export default () => {

    const handleOnClick = () => {
        const electron = window.require('electron')
        var win = electron.remote.getCurrentWindow()
        win.minimize();
    }
    return (
        <HomeContainer>
            {
                example.menu.map(x => <Card title={x.title} key={x.id} link={x.link} />)
            }
            <button onClick={() => handleOnClick()}>test</button>
        </HomeContainer>
    )
}