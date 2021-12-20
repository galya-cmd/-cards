import React from 'react';
import './table.css';

class Table extends React.Component {
    render() {
        const { name, translation } = this.props;
        return (

            <div className="table-cart">
                
                <div>Слово</div>
                <div>Транскрипция</div>
                <div>Кнопка</div>
                
                <div>
                <input type='text'></input>
                </div>
                <div><input type='text'></input></div>
                <div>
                <button className='delete'>delete</button>
                <button className='save'>save</button>
                </div>
            </div>
        );
    }
}

export default Table;