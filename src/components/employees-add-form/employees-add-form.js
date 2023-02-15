import { Component } from 'react';
import './employees-add-form.css'

class EmployeesAddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }
    onInput = (e) => {
        this.setState(state => ({[e.target.name]: e.target.value}));
    }
    render() {
        const {name, salary} = this.state;
        const {createDataItem} = this.props;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        name="name"
                        value={name}
                        onChange={this.onInput}
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" />
                    <input type="number"
                        name="salary"
                        value={salary}
                        onChange={this.onInput}
                        className="form-control new-post-label"
                        placeholder="З/П в $?" />
                    <button type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            createDataItem(name, salary);
                        }}
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;