import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component{
    constructor(props){
        super(props);
        this.classNames = "list-group-item d-flex justify-content-between";
        this.onToggleIncrease = () => props.onToggleState('increase');
        this.onToggleRise = () => props.onToggleState('rise');
        this.onChangeSalary = (e) => {
            props.onChangeSalary(e.currentTarget.value);
        };
    }
    
    getClassNames = () => {
        let classNames = this.classNames;
        if (this.props.increase) {
            classNames = classNames + ' increase';
        }
        if (this.props.rise) {
            classNames = classNames + ' like';
        }
        return classNames;
    }

    render() {
        const {name, salary, onDeleteItem} = this.props;
        return (
            <li className={this.getClassNames()}>
                <span onClick={this.onToggleRise} className="list-group-item-label">{name}</span>
                <input 
                    type="text" 
                    className="list-group-item-input"
                    onChange={this.onChangeSalary}
                    value={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button 
                        type="button"
                        onClick={this.onToggleIncrease}
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button type="button"
                        onClick={onDeleteItem}
                        className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;