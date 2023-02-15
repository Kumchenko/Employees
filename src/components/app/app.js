import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, name: 'John C.', salary: 800, increase: true, rise: false },
                { id: 2, name: 'Alex M.', salary: 1000, increase: false, rise: true },
                { id: 3, name: 'Carl W.', salary: 3000, increase: false, rise: false },
            ],
            filterOptions: [
                { id: 1, text: 'Все сотрудники', attr: 'all'},
                { id: 2, text: 'На повышение', attr: 'rise'},
                { id: 3, text: 'З/П больше 1000$', attr: 'over1000'},
            ],
            search: '',
            filter: 'all'
        };
        this.maxId = this.state.data[this.state.data.length - 1].id;
    }
    deleteDataItem = (id) => {
        this.setState(state => ({
            data: state.data.filter(item => item.id !== id)
        }));
    }
    createDataItem = (name, salary) => {
        let newEmployee = {
            id: ++this.maxId,
            name: name,
            salary: +salary,
            increase: false,
            rise: false
        }
        let newData = this.state.data.slice();
        newData.push(newEmployee);

        this.setState(state => ({ data: newData }));
    }
    toggleEmpState = (id, state) => {
        this.setState({
            data: this.state.data.map(item => {
                if (item.id === id) {
                    return {...item, [state]: !item[state]}
                }
                return item;
            })
        });
    }
    changeEmpSalary = (id, salary) => {
        const formattedSalary = parseInt(salary);
        if (formattedSalary) {
            this.setState({
                data: this.state.data.map(item => {
                    if (item.id === id) {
                        return {...item, salary: formattedSalary}
                    }
                    return item;
                })
            });
        }
    }
    getEmployeesCount = () => this.state.data.length
    getIncreasedCount = () => this.state.data.filter(item => item.increase).length;

    searchItem = (items, search, filter) => {
        let filters = this.state.filterOptions.map(item => {
            return item.attr
        });
        let searchedData = items.slice();

        if (search.length > 0) {
            searchedData = searchedData.filter(item => {
                return item.name.indexOf(search) !== -1;
            });
        }
        switch(filter) {
            case filters[0]: {
                break;
            }
            case filters[1]: {
                searchedData = searchedData.filter(item => {
                    return item.rise;
                });
                break;
            }
            case filters[2]: {
                searchedData = searchedData.filter(item => {
                    return item.salary >= 1000;
                });
                break;
            }
            default: {
                break;
            }
        }

        return searchedData;
    }

    setSearch = (e) => {
        this.setState({
            search: e.currentTarget.value.toString()
        });
    }
    setFilter = (e) => {
        this.setState({
            filter: e.currentTarget.getAttribute('data-filter')
        });
    }

    render() {
        const { data, filterOptions, search, filter } = this.state;
        const searchedData = this.searchItem(data, search, filter);
        return (
            <div className="app">
                <AppInfo 
                    all={this.getEmployeesCount()}
                    increased={this.getIncreasedCount()}/>
                <div className="search-panel">
                    <SearchPanel 
                        setSearch={this.setSearch}/>
                    <AppFilter
                        filterOptions={filterOptions}
                        filter={filter}
                        setFilter={this.setFilter}/>
                </div>
                <EmployeesList
                    data={searchedData}
                    deleteDataItem={this.deleteDataItem}
                    toggleEmpState={this.toggleEmpState}
                    changeEmpSalary={this.changeEmpSalary} />
                <EmployeesAddForm
                    createDataItem={this.createDataItem} />
            </div>
        );
    }
}

export default App;