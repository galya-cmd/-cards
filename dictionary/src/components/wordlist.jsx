import React from 'react';
import data from './data';
import './wordList.css';

function WordList() {
    
    const wordList = data.map((item) => {
        return (
        <Word key={item.id}{...item} />

        );

    })

        
        return (
            <>
    
            < div className="wordlist">
                <div className="name">слово</div>
                <div className="transcription">транскрипция</div>
                <div className='translation'>перевод</div>
                <div className='button-wordlist'>кнопка</div>
                
                <div className='table'>{wordList}</div>
                
                
                
                
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
            
            {isEditMode ? <button className='save'>Save</button> :null
            }

            {
                isEditMode ? null : <button className='delite'>Delite</button> 
            }
            {isEditMode ? <button>Cancel</button> : <button>Edit</button>}
        
            </div>
            </>

        );

    }

    

export default WordList;