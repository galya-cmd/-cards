import React, { useState, useRef } from 'react';
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
function Word({ name, transcription, translation, id  }) {

    const [isEditMode, changeEditMode] = useState(false);
    const [input, setInput] = useState({ name, translation });
    let inputRefName = useRef(null);
    let inputRefTranslation = useRef(null);



    function onClick() {
        changeEditMode(true)
    }

    // function onClickcancel() {
    //     changeEditMode(false)
    // }

    function onNamechenge(event) {

        if (inputRefName.current.value == '') {

            inputRefName.current.classList.add('error');


        } else {
            inputRefName.current.classList.remove('error');
        }

//         let result = false;
        
//   for (let i = 0; i <= input.name.lenght, i++){
//       if (input.name[i] === inputRefName){
        
//           result = true; break;
//       }else{
//         alert(`введите верное значение ${input.name}`)
//       }
//   }

// const keys = Object.values(input.name);
//   keys.forEach(value => {
//     if (value === inputRefName){
//         alert ("jr")
//     }else alert(`${value}`)
//   })

        setInput({
            name: event.target.value,
            translation: input.translation,
        })
    }



    function onTranslationchenge(event) {
        if (inputRefTranslation.current.value == '') {

            inputRefTranslation.current.classList.add('error');


        } else {
            inputRefTranslation.current.classList.remove('error');
        }
       

        setInput({
            name: input.name,
            translation: event.target.value
            
        })
    }
    function onCancelechenge(event) {
        setInput({
            name: name,
            translation: translation,
        })
        changeEditMode(false)

    }






    return (
        <>
            <tr>
                <td>
                    {isEditMode ? <input onChange={onNamechenge} defaultValue={input.name} ref={inputRefName} /> : name}
                

                </td>
                <td>{transcription}</td>
                <td>
                    {isEditMode ? <input onChange={onTranslationchenge} defaultValue={input.translation} ref={inputRefTranslation} /> : translation}
                </td>
                <td>
                    {
                        isEditMode ? <button disabled={!input.name , !input.translation} className='save'>Save</button> : null
                    }
                    {
                        isEditMode ? null : <button className='delite'>Delite</button>
                    }
                    {isEditMode ? <button className='cancel' onClick={onCancelechenge}>Cancel</button> : <button className='edit' onClick={onClick}>Edit</button>}
                </td>
            </tr>
        </>

    );

}



export default WordList;