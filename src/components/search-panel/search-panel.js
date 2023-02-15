import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component{
    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                onChange={this.props.setSearch}
                placeholder="Найти сотрудника" />
        )
    }
}

export default SearchPanel;