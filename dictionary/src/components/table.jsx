import React from 'react';




class Table extends React.Component {
    
      
    render() {
      
        const { name,transcription, translation , id} = this.props;

        
        return (
            <>
    
            <div className="table-cart" key={id}>
                <div className="name">слово</div>
                <div className="transcription">транскрипция</div>
                <div className='translation'>перевод</div>
                <div className='table-button'>кнопка</div>
                <div>{name}</div>
                <div>{transcription}</div>
                <div>{translation}</div>
                <div>
                <button className='delete'>delete</button>
                <button className='save'>Save</button>
                </div>
            </div>


</>
        );
    }
}

export default Table;