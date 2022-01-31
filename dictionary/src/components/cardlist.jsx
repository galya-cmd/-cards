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
    console.log(currentIndex);
}

if (currentIndex === data.length){
    return "Вы прошли до конца!"
}else
    return(
        <>
      <div className="card-list"> 
        {currentIndex === 0 ? null : <button className='button-prev' onClick={onPrev}>{"<-"}</button>}
        <Card {...data[currentIndex]} />
        {currentIndex + 1} / {data.length}
        <button className='button-next' onClick={onNext}>{'->'}</button>
      
        
      </div>
      
        </>
    )
}

export default Cardlist;