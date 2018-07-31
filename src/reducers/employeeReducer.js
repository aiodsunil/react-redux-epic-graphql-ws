import {
    LOAD_EMPLOYEE_COMPLETE,
    CLEAR_EMPLOYEE,
    HTTP_ERROR
} from '../actions/actions';


export function loadEmployees(state = [], action) {
    switch (action.type) {
        case LOAD_EMPLOYEE_COMPLETE:
            return  action.payload;
        case CLEAR_EMPLOYEE:
            return [];
        case HTTP_ERROR :
             return  action.payload;

        default:
            return state;
    }

}