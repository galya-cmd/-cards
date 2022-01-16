import React, {useState} from 'react';
import Cardlist from './cardlist';
import './dictionary.css';


function Dictionary(props) {

    const [presset, setPresset] = useState(false);
    const handleChange = () => {
        setPresset(!presset);
    }
    return(
 
        <>
        
        
    <div className='list'>
    
    <input className='button'{...props} onClick={handleChange} value={
        presset ? 'Я' : 'I' + " " + '[ai]'
    } />
    

    <div>
    

    </div>
    
    </div>
    
    
    
    
        </>
    )
}

export default Dictionary;
    
    



