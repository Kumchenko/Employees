import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {
    render() {
        const btns = this.props.filterOptions.map(item => {
            const style = (this.props.filter === item.attr) ? 'btn-light' : 'btn-outline-light';
            return (
                <button 
                    className={`btn ${style}`}
                    data-filter={item.attr}
                    onClick={this.props.setFilter}
                    key={item.id}
                    type="button">
                        {item.text}
                </button>
            )
        });

        return (
            <div className="btn-group">
                {btns}
            </div>
        )
    }
}

export default AppFilter;