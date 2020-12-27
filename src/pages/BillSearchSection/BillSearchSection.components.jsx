import React, { useState } from 'react'
import { BillSectionContainer, BillListContainer, BillListButton } from './BillSearchSection.style'
import { Container } from '../../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import example from '../../util/example'
import POST_API from '../../api/default'
export default ({ search }) => {
    const dispatch = useDispatch()
    // const [mode, setMode] = useState('view')
    // const [receiving, setReceiving] = useState('')
    const BillList = useSelector(state => state.bill.BillList)
    const Courses = useSelector(state => state.lesson.Courses)

    const renderInput = (mode, value, onChange) => {
        switch (mode) {
            case 'edit':
                return <input value={value} style={{ width: '70%' }} onChange={(e) => onChange(e.target.value)} />
            default:
                return <div>{value}</div>
        }
    }

    const renderSelect = (mode, value, onChange) => {
        switch (mode) {
            case 'edit':
                return <select value={value} onChange={e => onChange(e.target.value)}>
                    {Courses.map(l =>
                        <option value={l.courseFeeId}>{l.courseFeeName}</option>
                    )}
                </select>
            default:
                return <div>{value ? Courses.find(x => x.courseFeeId === value).courseFeeName : ''}</div>
        }
    }

    const renderPay = (value, receivingUnit, receiving, receivingName, onChange, j) => {
        return <div>
            {!receivingUnit && <select value={receiving === '大有本部' || receiving === '大成分部' || receiving === '' ? receiving : '其他'} onChange={e => onChange(
                'receiving', e.target.value)}>
                {example.payDept.map(l =>
                    <option value={l.title}>{l.title}</option>
                )}
            </select>
            }
            {
                !receivingUnit && receiving == '其他' &&
                <input style={{ width: '50%' }} value={receivingName} onChange={e => onChange(
                    'receivingName', e.target.value)}></input>
            }
            {!value && <button onClick={() => checkReceivingName(receiving, receivingName, j)}>已繳費</button>}
        </div>
    }

    const checkReceivingName = (receiving, receivingName, j) => {
        if (receiving == '其他') {
            if (!receivingName) {
                alert('請先填寫分部名稱')
                return false
            }
        }

        saveBill('', j)
    }

    const editBill = (name, value, index, mode, i) => {
        var Bill = BillList.map(x => x)
        if (mode === 'delete') {
            var courseFeeList = Bill[i].courseFeeList.filter((x, i) => i !== index)
            Bill[i].courseFeeList = courseFeeList
        } else if (mode === 'add') {
            Bill[i].courseFeeList = Bill[i].courseFeeList ? Bill[i].courseFeeList : []
            Bill[i].courseFeeList.push({
                payRecordId: '',
                courseFeeId: '1',
                expenseMonthEnd: '',
                expenseMonthStart: '',
                remark: ''
            })
        }
        else if (mode === 'edit') {
            Bill[i].courseFeeList[index] = { ...Bill[i].courseFeeList[index], [name]: value }
        } else {
            Bill[i][name] = value
        }

        dispatch({
            type: 'EDIT_BILL',
            payload: { BillList: Bill }
        })
    }

    const saveBill = (payType, i) => {
        var { payMainId, stdntId, courseFeeList, grade, paymentMonth, stdntName, receiving, receivingName } = BillList[i]
        let g = grade === '全部' ? '' : example.eduLevel.find(edu => edu.title === grade).id
        if (payType === 'saveBill') {
            POST_API('/academy03/04', { payMainId, stdntId, courseFeeList, grade: g, paymentMonth }).then(result => {
                alert(result.data)
                // dispatch({ type: 'SEARCH_STUDENT_BILL_LIST', payload: { BillList: [result.data] } })
            })
        }
        else {
            POST_API('/academy03/05', { payMainId, receivingUnit: receiving === '其他' ? receivingName : receiving }).then(result => {
                alert(result.data)
                if (result.data === 'success') {
                    POST_API('/academy03/01', search).then(result => {
                        if (result.data.length > 0) {
                            result.data.forEach(x => {
                                x.mode = 'view'
                                x.receiving = x.receivingUnit ? x.receivingUnit : ''
                                return x
                            })
                            dispatch({ type: 'SEARCH_STUDENT_BILL_LIST', payload: { BillList: result.data } })
                        }
                        else alert('查無資料')
                    })
                }
            })
        }
    }


    return (
        <Container>
            <BillSectionContainer>
                {
                    BillList.length > 0 ? BillList.map((x, j) =>
                        <BillListContainer flag={x.payDate !== '' ? 'done' : 'none'}>
                            <div style={{ gridColumn: '1/4' }}>{x.stdntName} {x.grade}</div>
                            <div style={{ textAlign: 'left' }}>創立日期:{x.paymentCrDate}
                                <div>繳交日期:{x.payDate}</div>
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <div>繳交單位:{x.receivingUnit}</div>
                                {renderPay(x.payDate, x.receivingUnit, x.receiving, x.receivingName, (name, value) => editBill(name, value, '', '', j), j)}
                            </div>
                            <div style={{ padding: '10px' }}>
                                {x.mode === 'edit' &&
                                    <React.Fragment>
                                        <BillListButton className="fas fa-plus" onClick={() => editBill('', '', '', 'add', j)}></BillListButton>
                                        <BillListButton className="fas fa-save" onClick={() => saveBill('saveBill')}></BillListButton>
                                    </React.Fragment>
                                }
                                {x.mode !== 'edit' && x.payDate === '' &&
                                    <BillListButton className="fas fa-pen" onClick={() => editBill('mode', 'edit', '', '', j)}></BillListButton>
                                }
                            </div>

                            <div style={{ gridColumn: '1/4' }}>
                                {x.courseFeeList.length > 0 ? x.courseFeeList.map((y, i) =>
                                    <div style={{ display: 'grid', gridTemplateColumns: x.mode === 'edit' ? 'repeat(5,1fr)' : 'repeat(4,1fr)' }}>
                                        <div>{renderSelect(x.mode, y.courseFeeId, (value) => editBill('courseFeeId', value, i, 'edit', j))}</div>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
                                            {renderInput(x.mode, y.expenseMonthStart, (value) => editBill('expenseMonthStart', value, i, 'edit', j))} - {renderInput(x.mode, y.expenseMonthEnd, (value) => editBill('expenseMonthEnd', value, i, 'edit', j))}</div>
                                        <div>{renderInput(x.mode, y.expense, (value) => editBill('expense', value, i, 'edit', j))}</div>
                                        <div>{renderInput(x.mode, y.remark, (value) => editBill('remark', value, i, 'edit', j))}</div>
                                        {x.mode === 'edit' &&
                                            <BillListButton className="fas fa-trash" onClick={() => editBill('', '', i, 'delete', j)}></BillListButton>
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