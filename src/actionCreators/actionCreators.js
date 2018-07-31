import {LOAD_EMPLOYEE_COMPLETE} from '../actions/actions';

export function loadEmp(text){
    console.log(`Action Creator - loadEmployee - ${text}`);
    return {type:LOAD_EMPLOYEE_COMPLETE,payload:text};
}