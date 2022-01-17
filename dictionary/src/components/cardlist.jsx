import React from 'react';
import {useState} from 'react';
import Card from './card';
import data from './data';



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
        {currentIndex > 0 && <button onClick={onPrev}>{"<-"}</button>}
        <Card {...data[currentIndex]} />
        {currentIndex + 1} / {data.length}
        <button onClick={onNext}>{"->"}</button>
      </div>
        </>
    )
}

export default Cardlist;