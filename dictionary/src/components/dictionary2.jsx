import React, {useState} from 'react';
import './dictionary.css';


function Dictionary2(props) {

    const [presset, setPresset] = useState(false);
    const handleChange = () => {
        setPresset(!presset);
    }
    return(
 
        <>
    <input className='button' {...props} onClick={handleChange} value={
        presset ? '[ haʊs ]' : 'House'
        } />
    
        
        </>
    )
}

export default Dictionary2;