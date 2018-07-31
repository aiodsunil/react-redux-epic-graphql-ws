import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import * as  employeeReducer from '../reducers/employeeReducer';
import employeesEpic from '../epics/employeesEpic';

export  const rootEpic = combineEpics(employeesEpic);

export const rootReducer = combineReducers({
   employees: employeeReducer.loadEmployees
});