import React from 'react';
import {connect} from 'react-redux';
import {loadEmployee,clearEmployee}  from  '../actionCreators/actionCreators';

function Employees(props){
    return (
        <div>
          <button type="button" onClick={props.onClick}>Load ALL Employees</button>
          <button type="button" onClick={props.clear}>Clear Employee</button>
          <EmployeeList {...props}/>
        </div>
    )
}
    
function EmployeeList(props){
    if(!props.employees || props.employees.length===0) return null;
    console.log(props.employees)
    return(
        <div>
          {props.employees.map(employee =><Employee {...employee} key={employee.empid}/>)}
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
        onClick:()=>dispatch(loadEmployee()),
        clear:() =>dispatch(clearEmployee())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Employees);