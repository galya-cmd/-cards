import React from 'react';
import './table.css';

class Table extends React.Component {
  render(){
  const {name,translation} = this.props;
    return(
    
      <div className="cart">
      <div className="table-name">{name}</div>
      <div className="table-translation">{translation}</div>
    <div>
    <button>сохранить</button>
        <button>редактировать</button>
        <button>удалить</button>
    </div>
      </div>
      );
    }  
}

export default Table;