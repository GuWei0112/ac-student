import React from 'react'
import {InputTitle, InputContainer,Input} from './Input.style'
export default ({ title, value, handleOnChange, disabled, type, name }) => {
    return (
        <InputContainer>
            <InputTitle>{title}</InputTitle>
            <Input type={type} value={value} onChange={(e) => handleOnChange(name, e.target.value)} disabled={disabled} />
        </InputContainer>
    )
}