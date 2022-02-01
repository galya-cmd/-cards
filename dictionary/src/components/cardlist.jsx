import React from 'react';
import {useState} from 'react';
import Card from './card';
import './cardlist.css';



function Cardlist ({data}) {
const [currentIndex, setCurrentindex] = useState(0);
const [selected, setSelected] = useState([]);

const id = data[currentIndex].id;

function isbuttonTranslation (){
    if (!selected.includes(id)){
        setSelected([...selected, id]);
    }
}

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
         {currentIndex === 0 ? null : <button className='button-prev' onClick={onPrev}>{"<-"}</button>}


      <div className="card-list"> 
        <Card isbuttonTranslation={isbuttonTranslation} {...data[currentIndex]} />
        Открыто  {selected.length}  из {data.length}
    </div>


    <button className='button-next' onClick={onNext}>{'->'}</button>
    
    <div>
      Всего просмотрено
      {currentIndex + 1} \ {data.length}
      </div>
        </>
    )
}

export default Cardlist;