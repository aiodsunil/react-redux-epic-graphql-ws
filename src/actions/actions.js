export const LOAD_EMPLOYEE = 'LOAD_EMPLOYEE';
export const CLEAR_EMPLOYEE = 'CLEAR_EMPLOYEE';
export const HTTP_ERROR = 'HTTP_ERROR';
export const LOAD_EMPLOYEE_COMPLETE='LOAD_EMPLOYEE_COMPLETE';

export function loadEmployee() {
    console.log('LE');
    return {
        type: LOAD_EMPLOYEE
    }
}
export function clear() {
    return {
        type: CLEAR_EMPLOYEE
    }
}