import React, { useState, useEffect } from 'react'
import { BillContainer, Bill, BillTitle, BillWrapper, BillHr, BillButton, BillInput } from './Bill.style'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button/Button.components'
import POST_API from '../../api/default'
import example from '../../util/example'
export default withRouter(({ location, match, history }) => {
    const dispatch = useDispatch()

    const Courses = useSelector(state => state.lesson.Courses)
    const [student, setStudent] = useState(location.state ? location.state.student : {})
    const [bill, setBill] = useState({})
    const [temp, setTemp] = useState({ courseFeeId: '', expense: '', remark: '', expenseMonthStart: '', expenseMonthEnd: '' })
    const { mode } = match.params

    useEffect(() => {
        if (location.state.student) { // find recent bill
            let g = location.state.student.grade === '全部' ? '' : example.eduLevel.find(edu => edu.title == location.state.student.grade).id
            POST_API('/academy03/03', { grade: g, stdntId: location.state.student.stdntId }).then(result => {
                dispatch({ type: 'SEARCH_RECENT_BILL', payload: {} })
                if(result)
                    setBill({...bill,courseFeeList:result.data.courseFeeList})
            })
        }
    }, [location.state.student])

    const handleClick = (mode, i) => {
        if (mode === 'edit') {
            bill.courseFeeList[i].state = 'edit'
            setTemp(bill.courseFeeList[i])
        }
        else if (mode === 'add') {
            var tempAdd = {}
            if (bill.courseFeeList) {
                tempAdd = { payRecordId: '', state: 'edit', id: bill.courseFeeList.length + 1, courseFeeId: 1, remark: '123', expense: 100, expenseMonthStart: '10', expenseMonthEnd: '10' }
                bill.courseFeeList.push(tempAdd)
            } else {
                bill.courseFeeList = []
                tempAdd = { payRecordId: '', state: 'edit', id: bill.courseFeeList.length + 1, courseFeeId: 1, remark: '123', expense: 100, expenseMonthStart: '10', expenseMonthEnd: '10' }
                bill.courseFeeList.push({ payRecordId: '', state: 'edit', id: bill.courseFeeList.length + 1, courseFeeId: 1, remark: '123', expense: 100, expenseMonthStart: '10', expenseMonthEnd: '10' })
            }
            setTemp(tempAdd)
        }
        else if (mode === 'del') {
            bill.courseFeeList = bill.courseFeeList.filter((x, index) => index !== i)
            setTemp({ courseFeeId: '', expense: '', remark: '', expenseMonthStart: '', expenseMonthEnd: '' })
        }
        else {
            bill.courseFeeList[i] = temp
            bill.courseFeeList[i].state = 'save'
            setTemp({ courseFeeId: '', expense: '', remark: '', expenseMonthStart: '', expenseMonthEnd: '' })
        }

        setBill(bill)
    }

    const handleOnChange = (name, value) => {
        setTemp({ ...temp, [name]: value })
    }

    const handleSave = () => {
        if (student) {
            let g = student.grade === '全部' ? '' : example.eduLevel.find(edu => edu.title == student.grade).id
            POST_API('/academy03/04', { payMainId: '', courseFeeList: bill.courseFeeList, stdntId: student.stdntId, grade: g, paymentMonth: '10' }).then(result => {
                // console.log(result)
                // dispatch({ type: 'ADD_BILL', payload: {} })
                history.goBack()
            })
        }
    }

    const renderSelect = (mode, value, onChange) => {
        switch (mode) {
            case 'add':
            case 'edit':
                return <select value={value} onChange={e => onChange(e.target.value)}>
                    {Courses.map(l =>
                        <option value={l.courseFeeId}>{l.courseFeeName}</option>
                    )}
                </select>
            default:
                return <div>{Courses.find(x => x.courseFeeId == value).courseFeeName}</div>
        }
    }
    console.log(bill)
    if (mode === 'add')
        return (
            <BillContainer>
                <BillTitle>{student.stdntName}</BillTitle>
                <BillWrapper mode>
                    <Bill>課程</Bill>
                    <Bill>起月份</Bill>
                    <Bill>迄月份</Bill>
                    <Bill>費用</Bill>
                    <Bill>備註</Bill>
                    <Bill>功能</Bill>
                </BillWrapper>
                {
                    bill.courseFeeList && bill.courseFeeList.map((x, i) => <BillWrapper mode>
                        {renderSelect(x.state, x.state === 'edit' ? temp.courseFeeId : x.courseFeeId, value => handleOnChange('courseFeeId', value))}
                        {x.state === 'edit' ? <BillInput value={temp.expenseMonthStart} onChange={e => handleOnChange('expenseMonthStart', e.target.value)} /> : <Bill>{x.expenseMonthStart}</Bill>}
                        {x.state === 'edit' ? <BillInput value={temp.expenseMonthEnd} onChange={e => handleOnChange('expenseMonthEnd', e.target.value)} /> : <Bill>{x.expenseMonthEnd}</Bill>}
                        {x.state === 'edit' ? <BillInput value={temp.expense} onChange={e => handleOnChange('expense', e.target.value)} /> : <Bill>{x.expense}</Bill>}
                        {x.state === 'edit' ? <BillInput value={temp.remark} onChange={e => handleOnChange('remark', e.target.value)} /> : <Bill>{x.remark}</Bill>}
                        <div>

                            {x.state === 'edit' ? <BillButton className='fas fa-save' onClick={() => handleClick('save', i)} /> : <BillButton className='fas fa-pen' onClick={() => handleClick('edit', i)} />}
                            <BillButton className='fas fa-trash' onClick={() => handleClick('del', i)} />
                        </div>
                    </BillWrapper>)
                }
                <BillButton className='fas fa-plus' onClick={() => handleClick('add', 0)} />
                <BillWrapper mode>
                    <BillHr mode />
                    <Bill style={{ gridColumn: '4/4' }}>
                        {bill.courseFeeList && bill.courseFeeList.map(function (obj) { return parseInt(obj.expense) }).reduce((a, b) => (a) + (b), 0)}</Bill>
                </BillWrapper>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', padding: '10px' }}>
                    <Button title={'儲存'} handleSubmit={() => { handleSave() }} />
                    <Button title={'取消'} handleOnClick={() => { history.goBack() }} />
                </div>

            </BillContainer>
        )
    else
        return (
            <BillContainer>
                <BillTitle>{student.name}</BillTitle>
                <BillWrapper>
                    <Bill>課程</Bill>
                    <Bill>起月份</Bill>
                    <Bill>迄月份</Bill>
                    <Bill>費用</Bill>
                    <Bill>備註</Bill>
                </BillWrapper>
                {
                    student.paymentList[mode].courseFeeList.map(x => <BillWrapper>
                        <Bill>{x.name}</Bill>
                        <Bill>{x.expenseMonthStart}</Bill>
                        <Bill>{x.expenseMonthEnd}</Bill>
                        <Bill>{x.expense}</Bill>
                        <Bill>{x.remark}</Bill>
                    </BillWrapper>)
                }
                <BillWrapper>
                    <BillHr />
                    <Bill style={{ gridColumn: '4/4' }}>
                        {student.paymentList[mode].courseFeeList.reduce((a, b) => parseInt(a.payment) + parseInt(b.payment))}</Bill>
                </BillWrapper>
                <Button title={'取消'} handleOnClick={() => { history.goBack() }} />

            </BillContainer>
        )
})