import React from 'react'
import { RadioContainer, Radio, RadioTitle } from './RadioButton.style'

export default ({ title, value, handleOnChange, disabled, type, name }) => {
    return (
        <RadioContainer>
            <RadioTitle>{title}</RadioTitle>
            <Radio type={type} name={name} value={true} checked={value === '1'} onChange={(e) => handleOnChange(name, '1')} disabled={disabled} />
            <Radio type={type} name={name} value={!true} checked={value === '0'} onChange={(e) => handleOnChange(name, '0')} disabled={disabled} />
        </RadioContainer>
    )
}