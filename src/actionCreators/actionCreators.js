import {
    LOAD_EMPLOYEE_COMPLETE,LOAD_EMPLOYEE,CLEAR_EMPLOYEE
} from '../actions/actions';

export function loadEmployeeComplete(text) {
    console.log(`Action Creator - loadEmployeeComplete - ${text}`);
    return {
        type: LOAD_EMPLOYEE_COMPLETE,
        payload: text
    };
}
export function loadEmployee() {
    return {
        type: LOAD_EMPLOYEE
    }
}
export function clearEmployee() {
    return {
        type: CLEAR_EMPLOYEE
    }
}