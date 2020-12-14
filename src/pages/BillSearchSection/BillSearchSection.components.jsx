import React, { useState } from 'react'
import { BillSectionContainer, BillListContainer, BillListButton } from './BillSearchSection.style'
import { Container } from '../../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import example from '../../util/example'
import POST_API from '../../api/default'
export default () => {
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
                return <select value={value} onChange={e => onChange(e.target.value)}>
                    {Courses.map(l =>
                        <option value={l.courseFeeId}>{l.courseFeeName}</option>
                    )}
                </select>
            default:
                return <div>{Courses.find(x => x.courseFeeId === value).courseFeeName}</div>
        }
    }

    const renderPay = (value, receivingUnit, onChange) => {
        return <div>{value}
            <select value={receivingUnit} onChange={e => onChange(e.target.value)}>
                {example.payDept.map(l =>
                    <option value={l.title}>{l.title}</option>
                )}
            </select>
            <button onClick={() => saveBill('')}>已繳費</button>
        </div>

    }

    const handleChangeMode = (mode) => {
        setMode(mode)
    }

    const editBill = (name, value, index, mode) => {
        var Bill = BillList.map(x => x)[0]
        if (mode === 'delete') {
            var courseFeeList = Bill.courseFeeList.filter((x, i) => i !== index)
            Bill.courseFeeList = courseFeeList
        } else if (mode === 'add') {
            Bill.courseFeeList.push({
                payRecordId: '',
                courseFeeId: '1',
                expenseMonthEnd: '',
                expenseMonthStart: '',
                remark: ''
            })
        }
        else if (mode === 'edit') {
            Bill.courseFeeList[index] = { ...Bill.courseFeeList[index], [name]: value }

        } else {
            Bill = { ...Bill, [name]: value }
        }

        dispatch({
            type: 'EDIT_BILL',
            payload: { BillList: Bill }
        })
    }

    const saveBill = (payType) => {
        var { payMainId, stdntId, courseFeeList, grade, paymentMonth, receivingUnit} = BillList.map(x => x)[0]
        let g = grade === '全部' ? '' : example.eduLevel.find(edu => edu.title === grade).id
        if (payType === 'saveBill') {
            POST_API('/academy03/04', { payMainId, stdntId, courseFeeList, grade: g, paymentMonth }).then(result => {
                console.log(result)
                // dispatch({ type: 'SEARCH_STUDENT_BILL_LIST', payload: { BillList: [result.data] } })
            })
        }
        else {
            POST_API('/academy03/05', { payMainId, receivingUnit }).then(result => {
                console.log(result)
                // dispatch({ type: 'SEARCH_STUDENT_BILL_LIST', payload: { BillList: [result.data] } })
            })
        }
        handleChangeMode('view')
    }


    return (
        <Container>
            <BillSectionContainer>
                {BillList[0].stdntName} {BillList[0].grade}
                {
                    BillList.length > 0 ? BillList.map(x =>
                        <BillListContainer flag={x.payDate !== '' ? 'done' : 'none'}>
                            <div>創立日期:{x.paymentCrDate}</div>
                            <div>
                                <div>繳交單位:{x.receivingUnit}</div>
                                繳交日期:{renderPay(x.payDate, x.receivingUnit, (value) => editBill('receivingUnit', value, '', ''))}</div>
                            <div style={{ padding: '10px' }}>
                                {mode === 'edit' &&
                                    <React.Fragment>
                                        <BillListButton className="fas fa-plus" onClick={() => editBill('', '', '', 'add')}></BillListButton>
                                        <BillListButton className="fas fa-save" onClick={() => saveBill('saveBill')}></BillListButton>
                                    </React.Fragment>
                                }
                                {mode !== 'edit' &&
                                    <BillListButton className="fas fa-pen" onClick={() => handleChangeMode('edit')}></BillListButton>
                                }
                            </div>

                            <div style={{ gridColumn: '1/4' }}>
                                {x.courseFeeList.length > 0 ? x.courseFeeList.map((y, i) =>
                                    <div style={{ display: 'grid', gridTemplateColumns: mode === 'edit' ? 'repeat(5,1fr)' : 'repeat(4,1fr)' }}>
                                        <div>{renderSelect(y.courseFeeId, (value) => editBill('courseFeeId', value, i, 'edit'))}</div>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
                                            {renderInput(y.expenseMonthStart, (value) => editBill('expenseMonthStart', value, i, 'edit'))} - {renderInput(y.expenseMonthEnd, (value) => editBill('expenseMonthEnd', value, i, 'edit'))}</div>
                                        <div>{renderInput(y.expense, (value) => editBill('expense', value, i, 'edit'))}</div>
                                        <div>{renderInput(y.remark, (value) => editBill('remark', value, i, 'edit'))}</div>
                                        {mode === 'edit' &&
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