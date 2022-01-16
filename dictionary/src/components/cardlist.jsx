import React from 'react';
import {useState} from 'react';
import Dictionary from './dictionary';
import data from './data';



function Cardlist ({}) {
const [currentIndex, setCurrentindex] = useState(0);

function onNext (){
    setCurrentindex(currentIndex + 1);
}

function onPrev (){
    setCurrentindex(currentIndex - 1);
}

if (currentIndex === data.length){
    return "Вы прошли до конца!"
}else
    return(
        <>
        <div>
            {
            currentIndex > 0 && <button onClick={onPrev}>{'<-'}</button>
            }
            
            <Dictionary {...data[currentIndex]}/>
            {currentIndex + 1} / {data.length}
            <button onClick={onNext}>{'->'}</button>
        </div>
        </>
    )
}

export default Cardlist;