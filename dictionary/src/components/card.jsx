import React, {useState, useEffect} from 'react';



function Card({id , name, transcription, translation}) {
    
    const [presset, setPresset] = useState(true);
    const handleChange = () => {
        setPresset(!presset);

    }
    useEffect(() => {
      setPresset(true);
    }, [id]);

    
    return(
 
        <>
    <div className="card" onClick={handleChange}>
      <p>{presset ? name : translation}</p>
      <p>{transcription}</p>
    </div>
    
        </>
    )
}

export default Card;
    
    



