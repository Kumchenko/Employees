import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, deleteDataItem, toggleEmpState, changeEmpSalary}) => {

    const elems = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id}
                onDeleteItem={() => deleteDataItem(id)} 
                onToggleState={state => toggleEmpState(id, state)}
                onChangeSalary={salary => {changeEmpSalary(id, salary)}}
                {...itemProps}/>
        )
    });

    return (
        <ul className="app-list list-group">
            {elems}
        </ul>
    )
}

export default EmployeesList;