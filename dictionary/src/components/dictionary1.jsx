import React, {useState} from 'react';
import './dictionary.css';


function Dictionary1(props) {

    const [presset, setPresset] = useState(false);
    const handleChange = () => {
        setPresset(!presset);
    }
    return(
 
        <>
    <input className='button' {...props} onClick={handleChange} value={
        presset ? '[Хай]' : 'Hello'
        } />
    
        
        </>
    )
}

export default Dictionary1;