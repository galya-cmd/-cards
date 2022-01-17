import React from 'react';
import {useState} from 'react';
import Card from './card';
import './cardlist.css';



function Cardlist ({data}) {
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
      <div className="card-list">
        {currentIndex > 0 && <button className='button-cardlist' onClick={onPrev}>{"<-"}</button>}
        <Card {...data[currentIndex]} />
        
        <button className='button-cardlist' onClick={onNext}>{"->"}</button>
      </div>
        </>
    )
}

export default Cardlist;