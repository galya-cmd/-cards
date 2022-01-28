import React, {useState, useEffect} from 'react';
import './card.css';



function Card({id , name, transcription, translation, isbuttonTranslation}) {
    const [buttonPresset, setButtonpreset] = useState(true)
    const [presset, setPresset] = useState(0);

    const handleChange = () => {
      setPresset(!presset);
        
    }

    function buttonTranslation () {
      setButtonpreset(!buttonPresset);
      let val = buttonPresset;
      val++
      setButtonpreset(val);

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
    presset ?  <button onClick={buttonTranslation} className ='button-translation'>translation</button> : <button className='button-card'onClick={handleChange}>{presset ? null : translation}</button> 
      }
    </div>
    <p>{buttonPresset}</p>
    
        </>
    )
}

export default Card;
    
    



