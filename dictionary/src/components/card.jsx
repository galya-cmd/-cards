import React, {useState, useEffect} from 'react';
import './card.css';



function Card({id , name, transcription, translation, isbuttonTranslation}) {
    const [buttonPresset, setButtonpreset] = useState(true)
    const [presset, setPresset] = useState(true);

    const handleChange = () => {
        setPresset(!presset);

    }
    const buttonTranslation = () => {
      setButtonpreset(!buttonPresset);
      
    }

    useEffect(() => {
      setPresset(true);
    }, [id]);

    
    return(
 
        <>
    <div className="card" onClick={handleChange}>
      <p>{name}</p>
      <p>{transcription}</p>
      {
    presset ?  <button className ='button-translation'>translation</button> : <button className='button-card' onClick={handleChange}>{presset ? null : translation}</button> 
      }
      
      
      
    </div>
    
        </>
    )
}

export default Card;
    
    



