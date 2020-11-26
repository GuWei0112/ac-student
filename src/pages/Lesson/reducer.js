import { SEARCH_LESSONS, ADD_LESSON, EDIT_LESSON, DELETE_LESSON } from './action'
const initializeState = {
    Courses:[]
}

const LessonReducer = (state = initializeState, action) => {
    switch (action.type) {
        case SEARCH_LESSONS:
            return { ...state, Courses: action.payload.Courses }
        case ADD_LESSON:
            return { ...state, Courses: [...state.Courses, action.payload] }
        case EDIT_LESSON:
            var l = state.Courses.map(x=>x)
            l[action.payload.index] = action.payload.value
            return {...state, Courses: l}
        case DELETE_LESSON:     
            return { ...state, Courses: state.Courses.filter((l, i) => action.payload.index !== i) }
        default:
            return state
    }
}

export default LessonReducer