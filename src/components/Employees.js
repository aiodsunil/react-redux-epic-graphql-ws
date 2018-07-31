import React from 'react';
import {connect} from 'react-redux';
import {loadEmployee,clear}  from  '../actions/actions';

function Employees(props){
    return (
        <div>
          <button type="button" onClick={props.loadEmployee}>Load ALL Employees</button>
          <button type="button" onClick={props.clear}>Clear</button>
          <EmployeeList {...props}/>
        </div>
    )
}
    
function EmployeeList(props){
    
    console.log(props);
    if(!props.employees || props.employees.length===0) return null;
    return(
        <div>
          {props.employees.map(employee =><Employee {...employee} key={employee.id}/>)}
        </div>
    )
}
function Employee(props){
    return <p>{props.name}</p>

}
function mapStateToProps(state){
    return {
        employees:state.employees
    }
}
function  mapDispatchToProps(dispatch) {
    return {
        loadEmployee:()=>dispatch(loadEmployee()),
        clear:() =>dispatch(clear())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Employees);