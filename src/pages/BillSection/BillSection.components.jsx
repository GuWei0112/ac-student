import React from 'react'
import { Container } from '../../components/Container'
import { BillSectionContainer } from './BillSection.style'
import Bill from '../../components/Bill/Bill.components'
export default () => {
    return (
        <Container>
            <BillSectionContainer>
                <Bill />
            </BillSectionContainer>
        </Container>
    )
}