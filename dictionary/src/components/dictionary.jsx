import React from 'react';
import 'dicnionary.css';


function Dictionary(props) {
    return(
        <>
        <button className="button">{props.name}</button>

        </>
    )
}

export default Dictionary;