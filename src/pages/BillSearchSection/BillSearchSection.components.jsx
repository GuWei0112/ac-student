import React, { useEffect, useState } from 'react'
import { BillSectionContainer, BillListContainer, BillListButton } from './BillSearchSection.style'
import { Container } from '../../components/Container'
import { useDispatch, useSelector } from 'react-redux'
export default ({ name }) => {
    const dispatch = useDispatch()
    const [mode, setMode] = useState('view')
    const BillList = useSelector(state => state.bill.BillList)
    const Courses = useSelector(state => state.lesson.Courses)

    const renderInput = (value, onChange) => {
        switch (mode) {
            case 'edit':
                return <input value={value} style={{ width: '70%' }} onChange={(e) => onChange(e.target.value)} />
            default:
                return <div>{value}</div>
        }
    }

    const renderSelect = (value, onChange) => {
        switch (mode) {
            case 'edit':
                return <select value={value} onChange={e=>onChange(e.target.value)}>
                    {Courses.map(l =>
                        <option value={l.courseFeeId}>{l.courseFeeName}</option>
                    )}
                </select>
            default:
                return <div>{Courses.find(x => x.courseFeeId == value).courseFeeName}</div>
        }
    }

    const renderPay = (value, onChange) => {
        switch (value) {
            case '':
                return <div> 
                <select value={value}>
                    {[{value:'455'},{value: '123'}].map(l =>
                        <option value={l.value}>{l.value}</option>
                    )}
                </select>
                <button>已繳費</button>
                </div>
            default:
                return value
        }
    }

    const handleChangeMode = (mode) => {
        setMode(mode)
    }

    const editBill = (name, value, index, mode) => {
        var Bill = BillList.map(x => x)[0]
        if (mode == 'delete') {
            var courseFeeList = Bill.courseFeeList.filter((x, i) => i !== index)
            Bill.courseFeeList = courseFeeList
        } else if (mode == 'add') {
            Bill.courseFeeList.push({
                payRecordId: '',
                courseFeeId: '1',
                expenseMonthEnd: '',
                expenseMonthStart: '',
                remark: ''
            })
        }
        else {
            Bill.courseFeeList[index] = { ...Bill.courseFeeList[index], [name]: value }
        }

        dispatch({
            type: 'EDIT_BILL',
            payload: { BillList: Bill }
        })
    }

    return (
        <Container>
            <BillSectionContainer>
                {BillList[0].stdntName} {BillList[0].grade}
                {
                    BillList.length > 0 ? BillList.map(x =>
                        <BillListContainer flag={x.payDate != '' ? 'done' : 'none'}>
                            <div>創立日期:{x.paymentCrDate}</div>
                            {/* <div>繳交日期:{renderPay(x.payDate)}</div> */}
                            <div>繳交日期:{renderPay('')}</div>
                            <div style={{ padding: '10px' }}>
                                {mode == 'edit' &&
                                    <React.Fragment>
                                        <BillListButton className="fas fa-plus" onClick={() => editBill('', '', '', 'add')}></BillListButton>
                                        <BillListButton className="fas fa-save" onClick={() => handleChangeMode('view')}></BillListButton>
                                    </React.Fragment>
                                }
                                {mode != 'edit' &&
                                    <BillListButton className="fas fa-pen" onClick={() => handleChangeMode('edit')}></BillListButton>
                                }
                            </div>

                            <div style={{ gridColumn: '1/4' }}>
                                {x.courseFeeList.length > 0 ? x.courseFeeList.map((y, i) =>
                                    <div style={{ display: 'grid', gridTemplateColumns: mode == 'edit' ? 'repeat(5,1fr)' : 'repeat(4,1fr)' }}>
                                        <div>{renderSelect(y.courseFeeId, (value) => editBill('courseFeeId', value, i, ''))}</div>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>{renderInput(y.expenseMonthStart, (value) => editBill('expenseMonthStart', value, i, ''))} - {renderInput(y.expenseMonthEnd, (value) => editBill('expenseMonthEnd', value, i, ''))}</div>
                                        <div>{renderInput(y.expense, (value) => editBill('expense', value, i, ''))}</div>
                                        <div>{renderInput(y.remark, (value) => editBill('remark', value, i, ''))}</div>
                                        {mode == 'edit' &&
                                            <BillListButton className="fas fa-trash" onClick={() => editBill('', '', i, 'delete')}></BillListButton>
                                        }
                                    </div>
                                ) : []}
                            </div>
                        </BillListContainer>) : []
                }
            </BillSectionContainer >
        </Container >
    )
}