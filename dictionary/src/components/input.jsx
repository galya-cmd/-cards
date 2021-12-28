import React, {useState} from 'react';

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

export default Input;