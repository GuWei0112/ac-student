import React from 'react'
import { ButtonContainer, Button } from './Button.style'

export default ({ title, handleOnClick, handleSubmit, style }) => {
    let handleCommit = () => {
        switch (title) {
            case '返回':
            case '取消':
                return handleOnClick()
            case '儲存':
            case '修改':
            case '新增':
                return handleSubmit()
        }
    }
    return (<ButtonContainer style={style ? style : {}}>
        <Button onClick={() => handleCommit()}>{title}</Button>
    </ButtonContainer>)
}