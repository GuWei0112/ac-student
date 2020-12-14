import {
    SEARCH_STUDENT, EDIT_STUDENT, EDIT_STUDENT_GRADE,
    ADD_STUDENT, EXPORT_STUDENT_GRADE, CLEAN_STUDENT
} from './action'
import example from '../../util/example'
const initializeState = {
    Student: []
}

const StudentReducer = (state = initializeState, action) => {
    switch (action.type) {
        case SEARCH_STUDENT:
            return { ...state, Student: action.payload.Student }
        case ADD_STUDENT:
            return { ...state, Student: [...state.Student, action.payload.Student] }
        case EDIT_STUDENT:
            var Student = state.Student.map((student) => {
                if (student.stdntId === action.payload.stdntId) { return action.payload }
                return student
            })
            return { ...state, Student }
        case EDIT_STUDENT_GRADE:
            var gradeList = example.eduLevel.map(x => x.title)
            var StudentFinal = state.Student.map(x => {
                var index = gradeList.indexOf(x.grade)
                if (index !== -1 && index !== gradeList.length - 1)
                    return { ...x, grade: gradeList[(gradeList.indexOf(x.grade) + 1)] }
                return x
            })
            return { ...state, Student: StudentFinal }
        case EXPORT_STUDENT_GRADE: //學生資料匯出總表
            return state
        case CLEAN_STUDENT:
            return initializeState
        default:
            return state
    }
}

export default StudentReducer