import React, {useState, useEffect} from 'react';
import './card.css';



function Card({id , name, transcription, translation, isbuttonTranslation}) {
    const [buttonPresset, setButtonpreset] = useState(false)
    const [presset, setPresset] = useState(0);

    const handleChange = () => {
      setPresset(!presset);
        
    }

    function buttonTranslation () {
      setButtonpreset(!buttonPresset);
      isbuttonTranslation();
      // let val = buttonPresset;
      // val++;
      // setButtonpreset(val);
  

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
     
    
   
        </>
    )
}

export default Card;
    
    



