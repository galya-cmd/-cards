import React, {useState} from 'react';
import './dictionary.css';
function Input({text, trans}) {

    const [presset, setPresset] = useState(false);
    const handleChange = () => {
        setPresset(!presset);
    }
    return(

        <>
        <input
        className='button' onClick={handleChange} value={presset ? text : trans} />
        

    
        </>
    )
}







function Dictionary(props) {
    <>
<form>
    <input  text = "Я" trans="I [ай]"/>
    <input  text = "Я" trans="I [ай]"/>
    <input  text = "Я" trans="I [ай]"/>
</form> 
    
    </>
}

export default Dictionary;