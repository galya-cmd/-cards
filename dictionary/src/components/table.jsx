import React from 'react';
import './table.css';

class Table extends React.Component {
  render(){
  const {name,translation} = this.props;
    return(
    
      <div className="table-cart">
      <div>Слово</div>
    <div>Транскрипция</div>
    <div>Кнопки
    <button>сохранить</button>
        <button>редактировать</button>
        <button>удалить</button>
    </div>
      </div>
      );
    }  
}

export default Table;