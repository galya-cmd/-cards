import React from 'react';
import 'dicnionary.scss';


function Dictionary(props) {
    return(
        <>
        <button className="button">{props.name}</button>

        </>
    )
}

export default Dictionary;