import React, {useState} from 'react';
import './dictionary.css';


function Dictionary(props) {

    const [presset, setPresset] = useState(false);
    const handleChange = () => {
        setPresset(!presset);
    }
    return(
 
        <>
        <form>
    
    <input className='button'{...props} onClick={handleChange} value={
        presset ? '[ai]' : 'I'
    } />
  
    
    </form> 
        </>
    )
}

export default Dictionary;