import React from 'react';
import data from './data';
import './table.css';

function WordList() {
    
    const wordList = data.map((item) => {
        return (
        <Word key={item.id}{...item} />

        );

    })

        
        return (
            <>
    
            <div className="table-cart">
                <div className="name">слово</div>
                <div className="transcription">транскрипция</div>
                <div className='translation'>перевод</div>
                <div className='table-button'>кнопка</div>
                <div>{wordList}</div>
                
                
                
                
            </div>
</>
        );
    }
    function Word({name, transcription,translation,id, isEditMode}) {
        return (
            <>
            <div className='wordTable'>
            <div>  {
                isEditMode ? <input defaultValue={name}/> : name
            }</div>
            <div>{transcription}</div>
            <div> {
                isEditMode ? <input defaultValue={translation}/> : translation
            }
            </div>
            
            {isEditMode ? <button>Save</button> :null
            }

            {
                isEditMode ? null : <button>Delite</button> 
            }
            {isEditMode ? <button>Cancel</button> : <button>Edit</button>}
        
            </div>
            </>

        );

    }

    

export default WordList;