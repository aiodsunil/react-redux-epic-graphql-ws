import {
    LOAD_EMPLOYEE,HTTP_ERROR
} from '../actions/actions';
import {
    loadEmployeeComplete
} from '../actionCreators/actionCreators';
import {
    ajax
} from 'rxjs/observable/dom/ajax';

import {
    combineEpics
} from 'redux-observable';
import { Observable } from "rxjs";

const getEmployeeEpic = (action$, store) =>
    action$.ofType(LOAD_EMPLOYEE).mergeMap(action =>
        ajax.get(
            "http://localhost:8030/employees",{
                "Content-Type": "application/json"
            }
        )
        .map(response =>loadEmployeeComplete(response.response))
        .catch(err => {
            console.log(err);
            return Observable.of({
              type: HTTP_ERROR,
              payload: "" + err
            });
        }));

const employeesEpics = combineEpics(getEmployeeEpic);
export default employeesEpics;