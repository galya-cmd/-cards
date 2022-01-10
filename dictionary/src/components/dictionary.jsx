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
        presset ? 'Я' : 'I' + " " + '[ai]'
    } />
    <input className='button' {...props} onClick={handleChange} value={
        presset ? 'Привет' : 'Hello'+ " " + '[хэлоу]'
        } />
    <input className='button' {...props} onClick={handleChange} value={
        presset ? 'Дом' : 'House' + " " + "[ haʊs ]"
        } />
        
        </form>
        </>
)
        export default Dictionary;
    
    



