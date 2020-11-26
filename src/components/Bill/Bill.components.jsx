import React, { useState, useEffect } from 'react'
import { BillContainer, Bill, BillTitle, BillWrapper, BillHr, BillButton, BillInput } from './Bill.style'
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Button from '../Button/Button.components'
import POST_API from '../../api/default'
import example from '../../util/example'
export default withRouter(({ location, match, history }) => {
    const dispatch = useDispatch()

    const [student, setStudent] = useState(location.state ? location.state.student : {})
    const [bill, setBill] = useState(location.state ? location.state.student.paymentList[location.state.student.paymentList.length - 1] : {})
    const [temp, setTemp] = useState({ name: '', expense: '', remark: '', expenseSmonth: '', expenseEmonth: '' })
    const { mode } = match.params

    useEffect(() => {
        if (location.state.student) { // find recent bill
            let g = location.state.student.grade === '全部' ? '' : example.eduLevel.find(edu => edu.title == location.state.student.grade).id
            POST_API('/academy03/03', { grade: g, stdntId: location.state.student.stdntId }).then(result => {
                //console.log(result)
                dispatch({ type: 'SEARCH_RECENT_BILL', payload: { paymentList: [] } })
            })
        }
    }, [location.state.student])

    const handleClick = (mode, i) => {
        if (mode === 'edit') {
            bill.lessonList[i].state = 'edit'
            setTemp(bill.lessonList[i])
        }
        else if (mode === 'add') {
            bill.lessonList.push({ id: bill.lessonList.length + 1, name: '新課程', remark: '123', expense: 100, expenseSmonth: bill.lessonList[0].expenseSmonth, expenseEmonth: bill.lessonList[0].expenseSmonth })
            setTemp({ name: '', expense: '', remark: '', expenseSmonth: '', expenseEmonth: '' })
        }
        else if (mode === 'del') {
            bill.lessonList = bill.lessonList.filter((x, index) => index !== i)
            setTemp({ name: '', expense: '', remark: '', expenseSmonth: '', expenseEmonth: '' })
        }
        else {
            bill.lessonList[i] = temp
            bill.lessonList[i].state = 'save'
            setTemp({ name: '', expense: '', remark: '', expenseSmonth: '', expenseEmonth: '' })
        }

        setBill(bill)
    }

    const handleOnChange = (name, value) => {
        setTemp({ ...temp, [name]: value })
    }

    const handleSave = () => {
        if (student) {
            let g = student.grade === '全部' ? '' : example.eduLevel.find(edu => edu.title == student.grade).id
            POST_API('/academy03/04', { courseFeeList: [], stdntId: student.stdntId, grade: g, paymentMonth: '10' }).then(result => {
                console.log(result)
                dispatch({ type: 'ADD_BILL', payload: {} })
            })
            // history.goBack()
        }
    }

    if (mode === 'add')
        return (
            <BillContainer>
                <BillTitle>{student.name}</BillTitle>
                <BillWrapper mode>
                    <Bill>課程</Bill>
                    <Bill>起月份</Bill>
                    <Bill>迄月份</Bill>
                    <Bill>費用</Bill>
                    <Bill>備註</Bill>
                    <Bill>功能</Bill>
                </BillWrapper>
                {
                    bill.lessonList.map((x, i) => <BillWrapper mode>
                        {x.state === 'edit' ? <BillInput value={temp.name} onChange={e => handleOnChange('name', e.target.value)} /> : <Bill>{x.name}</Bill>}
                        {x.state === 'edit' ? <BillInput value={temp.expenseSmonth} onChange={e => handleOnChange('expenseSmonth', e.target.value)} /> : <Bill>{x.expenseSmonth}</Bill>}
                        {x.state === 'edit' ? <BillInput value={temp.expenseEmonth} onChange={e => handleOnChange('expenseEmonth', e.target.value)} /> : <Bill>{x.expenseEmonth}</Bill>}
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
                        {bill.lessonList.map(function (obj) { return parseInt(obj.expense) }).reduce((a, b) => (a) + (b), 0)}</Bill>
                </BillWrapper>
                <Button title={'儲存'} handleSubmit={() => { handleSave() }} />
                <Button title={'取消'} handleOnClick={() => { history.goBack() }} />

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
                    student.paymentList[mode].lessonList.map(x => <BillWrapper>
                        <Bill>{x.name}</Bill>
                        <Bill>{x.expenseSmonth}</Bill>
                        <Bill>{x.expenseEmonth}</Bill>
                        <Bill>{x.expense}</Bill>
                        <Bill>{x.remark}</Bill>
                    </BillWrapper>)
                }
                <BillWrapper>
                    <BillHr />
                    <Bill style={{ gridColumn: '4/4' }}>
                        {student.paymentList[mode].lessonList.reduce((a, b) => parseInt(a.payment) + parseInt(b.payment))}</Bill>
                </BillWrapper>
                <Button title={'取消'} handleOnClick={() => { history.goBack() }} />

            </BillContainer>
        )
})