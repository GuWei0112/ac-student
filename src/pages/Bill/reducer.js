import {
    SEARCH_BILL_LIST, SEARCH_STUDENT_BILL_LIST, SEARCH_RECENT_BILL, SEARCH_PRINT_BILL_LIST,
    PRINT_BILL_LIST, EXPORT_BILL_LIST, ADD_BILL, EDIT_BILL, REMOVE_BILL, CONFIRM_BILL
} from './action'
import example from '../../util/example'
const initializeState = {
    Bill: [],
    BillList: []
}

const BillReducer = (state = initializeState, action) => {
    switch (action.type) {
        case SEARCH_STUDENT_BILL_LIST: // 繳費紀錄查詢
            return {...state, BillList: action.payload.BillList}
        case SEARCH_BILL_LIST: // 應繳費明細
            let g = action.payload.grade === '全部' ? '' : action.payload.grade
            var student = state.Student.length > 0 ? state.Student.BillList : example.student
            return {
                ...state,
                Student: student
                    .filter(x => x.name.includes(action.payload.student) && x.grade.includes(g))
            }
        case SEARCH_RECENT_BILL: // 近期學生繳費資訊
            return {
                ...state,
                BillList: action.payload.paymentList
            }
        case ADD_BILL: // 新增明細
            // var i = action.payload.index
            return state
        case EDIT_BILL: // 編輯明細
            return {...state, BillList:action.payload.BillList}
        case CONFIRM_BILL: // 已繳費完成
            return state
        case SEARCH_PRINT_BILL_LIST: // 列印繳費查詢
            // let g1 = action.payload.grade === '全部' ? '' : action.payload.grade
            // var student = state.Student.length > 0 ? state.Student.BillList : example.student
            // return {
            //     ...state,
            //     Student: student
            //         .filter(x => x.name.includes(action.payload.student) && x.grade.includes(g1))
            // }
            return state
        case PRINT_BILL_LIST: // 列印繳費明細
            return state
        case EXPORT_BILL_LIST: // 匯出合計總表
            return state
        case REMOVE_BILL: // 刪除明細
            return state
        default:
            return state
    }
}

export default BillReducer