import { CHANGE_PAGE } from './action'
const initializeState = {
    page: 'home'
}

const Sysreducer = (state = initializeState, action) => {
    switch (action.type) {
        case CHANGE_PAGE:
            return { ...state, page: action.payload }
        default:
            return state
    }
}

export default Sysreducer