import React, {useState} from 'react';
import './dictionary.css';


function Dictionary(props) {

    const [presset, setPresset] = useState(false);
    const handleChange = () => {
        setPresset(!presset);
    }
    return(
 
        <>
        
        
    <div className='list'>
    <button>назад</button>
    <input className='button'{...props} onClick={handleChange} value={
        presset ? 'Я' : 'I' + " " + '[ai]'
    } />
    <button>вперед</button>
    
    </div>
    
    
    
    
        </>
    )
}

export default Dictionary;
    
    



