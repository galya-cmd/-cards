import React from 'react';
import './table.css';

class Table extends React.Component {
    render() {
       
        const { name,transcription, translation } = this.props;
        return (

            <div className="table-cart">
                <div>слово</div>
                <div>транскрипция</div>
                <div>перевод</div>
                <div>Кнопка</div>
                <div>{name}</div>
                <div>{transcription}</div>
                <div>{translation}</div>
                
                
                <div>
                <input type='text'></input>
                </div>
                <div><input type='text'></input></div>
                <div>
                <button className='delete'>delete</button>
                <button className='save'>Save</button>
                </div>
            </div>
        );
    }
}

export default Table;