import React from 'react';
import {useState} from 'react';
import Card from './card';
import './cardlist.css';



function Cardlist ({data}) {
const [currentIndex, setCurrentindex] = useState(0);
const [selected, setSelected] = useState([]);


const id = data[currentIndex].id;
console.log(id);


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
    return ( <img src='images/fireworks1.png' width='60%' height='60%'/>)
    
}else {
    <h3>Попробую ещё раз!</h3>
}

    return(
        <>
        <div className='allCard'>
         {currentIndex === 0 ? null : <button className='button-prev' onClick={onPrev}><img src='images/prev.png' width='20px' height='20px'/></button>}


      <div className="card-list"> 
        <Card isbuttonTranslation={isbuttonTranslation} {...data[currentIndex]} />
        Открыто  {selected.length}  из {data.length}
    </div>


    
    
    <div>
      Всего просмотрено: 
       {currentIndex + 1} \ {data.length}
      </div>

      <button className='button-next' onClick={onNext}> <img src='images/next.png' width='20px' height='20px'/></button>

      </div>
      
        </>
    )
}

export default Cardlist;