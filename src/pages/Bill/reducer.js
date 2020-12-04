import {
    SEARCH_BILL_LIST, SEARCH_STUDENT_BILL_LIST, SEARCH_RECENT_BILL, SEARCH_PRINT_BILL_LIST,
    PRINT_BILL_LIST, EXPORT_BILL_LIST, ADD_BILL, EDIT_BILL, REMOVE_BILL, CONFIRM_BILL
} from './action'
import POST_API from '../../api/default'
import example from '../../util/example'
const initializeState = {
    Bill: [],
    BillList: []
}

const BillReducer = (state = initializeState, action) => {
    switch (action.type) {
        case SEARCH_STUDENT_BILL_LIST: // 繳費紀錄查詢
            return {...state, BillList: action.payload.BillList}
            // TODO
            // POST_API('/academy03/01',{paymentMonth: action.payload.paymentMonth, name: action.payload.student})
            // let c = action.payload.paymentMonth === '全部' ? '' : action.payload.paymentMonth
            // var student = state.Student.length > 0 ? state.Student.BillList : example.student
            // return {
            //     ...state,
            //     Student: student
            //         .filter(x => x.name.includes(action.payload.student) && x.grade.includes(c))
            // }
        case SEARCH_BILL_LIST: // 應繳費明細
            // TODO
            // POST_API('/academy03/02',{grade: action.payload.grade, name: action.payload.student})
            let g = action.payload.grade === '全部' ? '' : action.payload.grade
            var student = state.Student.length > 0 ? state.Student.BillList : example.student
            return {
                ...state,
                Student: student
                    .filter(x => x.name.includes(action.payload.student) && x.grade.includes(g))
            }
        case SEARCH_RECENT_BILL: // 近期學生繳費資訊
            // TODO
            // POST_API('/academy03/03',{grade: action.payload.grade, stdntId: action.payload.stdntId})
            return {
                ...state,
                BillList: action.payload.paymentList
            }
        case ADD_BILL: // 新增明細
            var i = action.payload.index
            // TODO
            // POST_API('/academy03/04',{payMainId: action.payload.payMainId, name: action.payload.student})
            return state
        case EDIT_BILL: // 編輯明細
            // TODO
            // POST_API('/academy03/04',{payMainId: action.payload.payMainId, name: action.payload.student})
            // BillList
            return {...state, BillList:[action.payload.BillList]}
        case CONFIRM_BILL: // 已繳費完成
            // TODO
            // POST_API('/academy03/05',{payMainId: action.payload.payMainId, name: action.payload.student})
            return state
        case SEARCH_PRINT_BILL_LIST: // 列印繳費查詢
            // TODO
            // POST_API('/academy03/07',{grade: action.payload.grade, name: action.payload.student})
            let g1 = action.payload.grade === '全部' ? '' : action.payload.grade
            var student = state.Student.length > 0 ? state.Student.BillList : example.student
            return {
                ...state,
                Student: student
                    .filter(x => x.name.includes(action.payload.student) && x.grade.includes(g1))
            }
        case PRINT_BILL_LIST: // 列印繳費明細
            // TODO
            // POST_API('/academy04/01',{grade: action.payload.grade, name: action.payload.student})
            return state
        case EXPORT_BILL_LIST: // 匯出合計總表
            // TODO
            // POST_API('/academy05/01',{studentIdList: studentList})
            return state
        case REMOVE_BILL: // 刪除明細
            // TODO
            // POST_API('./search_bill_list',{params:action.payload})
            return state
        default:
            return state
    }
}

export default BillReducer