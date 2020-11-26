import { createStore, combineReducers } from 'redux'
import SysReducer from './reducer'
import StudentReducer from './Student/reducer'
import LessonReducer from './Lesson/reducer'
import BilllReducer from './Bill/reducer'

const reducer = combineReducers({
    student: StudentReducer,
    lesson: LessonReducer,
    bill: BilllReducer,
    system: SysReducer
})

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store