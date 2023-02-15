import { Component } from 'react';
import './app-info.css'

class AppInfo extends Component{
    render() {
        const {all, increased} = this.props;
        return (
            <div className="app-info">
                <h1>Учёт сотрудников в компании AppleDealer</h1>
                <h2>Общее число сотрудников: {all}</h2>
                <h2>Премию получат: {increased}</h2>
            </div>
        )
    };
}

export default AppInfo;