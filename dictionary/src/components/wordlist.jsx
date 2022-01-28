import React, { useState } from 'react';
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
        <h3>Таблица слов</h3>
            <table>
                <thead >
                    <tr>
                        <th>слово</th>
                        <th>транскрипция</th>
                        <th>перевод</th>
                        <th>выбрать действие</th>
                    </tr>
                    {wordList}
                </thead>
            </table>
        </>
    );
}
function Word({ name, transcription, translation, id }) {

    const [isEditMode, changeEditMode] = useState(false);
    const [input, setInput] = useState({name, translation});

    function onClick() {
        changeEditMode(true)
    }

    // function onClickcancel() {
    //     changeEditMode(false)
    // }

    function onNamechenge (event) {
        setInput({
            name : event.target.value ,
            translation: input.translation,
        })
        
    }
    function onTranslationchenge(event)
    {
        setInput({
            name : input.name,
            translation : event.target.value
        })
    }
    function onCancelechenge (event){
        setInput ({
            name : name,
            translation : translation,
        })
        changeEditMode(false)
        
    }
        
        
    

    return (
        <>
            <tr>
                <td>
                    {isEditMode ? <input onChange={onNamechenge} defaultValue={input.name} /> : name}
                </td>
                <td>{transcription}</td>
                <td>
                    {isEditMode ? <input onChange={onTranslationchenge} defaultValue={input.translation} /> : translation}
                </td>
                <td>
                    {
                        isEditMode ? <button className='save'>Save</button> : null
                    }
                    {
                        isEditMode ? null : <button className='delite'>Delite</button>
                    }
        {isEditMode ? <button className='cancel'  onClick={onCancelechenge}>Cancel</button> : <button className='edit' onClick={onClick}>Edit</button>}
                </td>
            </tr>
        </>

    );

}



export default WordList;