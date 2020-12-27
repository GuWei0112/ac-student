const menu = [{
    id: 1, title: '學生資料', link: 'student'
}, {
    id: 2, title: '課程維護', link: 'lesson'
}, {
    id: 3, title: '繳費清單', link: 'bill/search'
}]

const eduLevel = [{
    id: 0, title: '全部'
}, {
    id: 1, title: '一年級'
}, {
    id: 2, title: '二年級'
}, {
    id: 3, title: '三年級'
}, {
    id: 4, title: '四年級'
}, {
    id: 5, title: '五年級'
}, {
    id: 6, title: '六年級'
}, {
    id: 7, title: '國一'
}, {
    id: 8, title: '國二'
}, {
    id: 9, title: '國三'
}]

const studentLevel = [{
    id: 10, title: '國小'
}, {
    id: 11, title: '國中'
}, {
    id: 1, title: '一年級'
}, {
    id: 2, title: '二年級'
}, {
    id: 3, title: '三年級'
}, {
    id: 4, title: '四年級'
}, {
    id: 5, title: '五年級'
}, {
    id: 6, title: '六年級'
}, {
    id: 7, title: '國一'
}, {
    id: 8, title: '國二'
}, {
    id: 9, title: '國三'
}]

const student = [{
    stdntId: 1, name: '羅測試', birth: '2001/1/1', idCard: 'A1234567890', parentName: '',
    newNote: true, leaveNote: false, newDate: '', leaveDate: '',
    grade: '四年級', handoutExemption: '', engDiscount: '', mathDiscount: '',
    remark: '', lastPaymentDate: '2020/8/19', phone: '02-12345678',
    courseFeeList: [{
        courseFeeId: 1, signUpStartMonth: '2020/08/24', signUpEndMonth: '2021/08/23'
    }, {
        courseFeeId: 2, signUpStartMonth: '2020/08/24', signUpEndMonth: '2021/08/23'
    }],
    paymentList: [{
        id: 1,
        lessonList: [{
            id: 1, name: '英文', remoark: '7/1-7/31', expense: 23000, expenseSmonth: '7', expenseEmonth: '8'
        }, {
            id: 2, name: '國文', remoark: '7/15-7/31', expense: 7500, expenseSmonth: '7', expenseEmonth: '8'
        }],
        createDate: '2020/07/01', payDate: '未繳費'
    }, {
        id: 2,
        lessonList: [{
            id: 1, name: '英文', remoark: '8/1-9/30', expense: 23000, expenseSmonth: '8', expenseEmonth: '10'
        }, {
            id: 2, name: '國文', remoark: '8/1-8/31', expense: 15000, expenseSmonth: '8', expenseEmonth: '10'
        }],
        createDate: '2020/08/01', payDate: '2020/08/05'
    }]
}, {
    stdntId: 2, name: '陳測試', newNote: true, leaveNote: true, newDate: '', leaveDate: '', grade: '五年級', handoutExemption: '', SpeacialDate: '', engDiscount: '', mathDiscount: '', remark: '', lastPaymentDate: '2020/8/18'
}, {
    stdntId: 3, name: '林測試', newNote: true, leaveNote: false, newDate: '', leaveDate: '', grade: '四年級', handoutExemption: '', SpeacialDate: '', engDiscount: '', mathDiscount: '', remark: '', lastPaymentDate: '2020/8/17'
}, {
    stdntId: 4, name: '黃測試', newNote: true, leaveNote: false, newDate: '', leaveDate: '', grade: '四年級', handoutExemption: '', SpeacialDate: '', engDiscount: '', mathDiscount: '', remark: '', lastPaymentDate: '2020/8/16'
}]

const month = [
    { value: '一月', id: '1' }
    , { value: '二月', id: '2' }
    , { value: '三月', id: '3' }
    , { value: '四月', id: '4' }
    , { value: '五月', id: '5' }
    , { value: '六月', id: '6' }
    , { value: '七月', id: '7' }
    , { value: '八月', id: '8' }
    , { value: '九月', id: '9' }
    , { value: '十月', id: '10' }
    , { value: '十一月', id: '11' }
    , { value: '十二月', id: '12' }
]

const monthSearch = [
    {value: '全部', id: ''}
    , { value: '一月', id: '1' }
    , { value: '二月', id: '2' }
    , { value: '三月', id: '3' }
    , { value: '四月', id: '4' }
    , { value: '五月', id: '5' }
    , { value: '六月', id: '6' }
    , { value: '七月', id: '7' }
    , { value: '八月', id: '8' }
    , { value: '九月', id: '9' }
    , { value: '十月', id: '10' }
    , { value: '十一月', id: '11' }
    , { value: '十二月', id: '12' }
]

var nowYear = new Date().getFullYear()

const year = [
    { value: nowYear, id: nowYear }
    , { value: nowYear - 1, id: nowYear - 1 }
    , { value: nowYear - 2, id: nowYear - 2 }
    , { value: nowYear - 3, id: nowYear - 3 }
    , { value: nowYear - 4, id: nowYear - 4 }
    , { value: nowYear - 5, id: nowYear - 5 }
    , { value: nowYear - 6, id: nowYear - 6 }
    , { value: nowYear - 7, id: nowYear - 7 }
    , { value: nowYear - 8, id: nowYear - 8 }
    , { value: nowYear - 9, id: nowYear - 9 }
    , { value: nowYear - 10, id: nowYear - 10 }
]

const studentType = [
    { id: 1, name: 'name', type: 'text', title: '姓名' },
    { id: 2, name: 'birth', type: 'text', title: '生日' },
    { id: 3, name: 'idCard', type: 'text', title: '身分證字號' },
    { id: 4, name: 'parentName', type: 'text', title: '家長姓名' },
    { id: 5, name: 'phone', type: 'text', title: '聯絡電話' },
    // { id: 6, name: 'newNote', type: 'radio', title: '新生註記' },
    { id: 7, name: 'leaveNote', type: 'radio', title: '離校註記' },
    { id: 8, name: 'newDate', type: 'text', title: '入校日期' },
    { id: 9, name: 'leaveDate', type: 'text', title: '離校日期' },
    { id: 10, name: 'grade', type: 'text', title: '年級' },
    { id: 11, name: 'handoutExemption', type: 'radio', title: '講義減免註記' },
    { id: 12, name: 'engDiscount', type: 'radio', title: '兒美優惠' },
    { id: 13, name: 'mathDiscount', type: 'radio', title: '數學優惠' },
    { id: 14, name: 'remark', type: 'text', title: '備註' },
    { id: 15, name: 'lastPaymentDate', type: 'text', title: '最後繳費日期' },
]

const courseFeeList = [{
    courseFeeId: 1, courseFeeName: '英文'
}, {
    courseFeeId: 2, courseFeeName: '國文'
}, {
    courseFeeId: 3, courseFeeName: '數學'
}, {
    courseFeeId: 4, courseFeeName: '安親班'
}]

const payDept = [{
    id: 1, title: '大有本部'
}, {
    id: 2, title: '大成分部'
}, {
    id: 3, title: '其他'
}]

export default {
    menu, eduLevel, student, studentType, courseFeeList, month, year, payDept, studentLevel, monthSearch
}