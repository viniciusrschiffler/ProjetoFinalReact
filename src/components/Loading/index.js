import React from 'react';

import './style.css'

import gif from "../../img/gif.gif"

function Loading() {
    return (
        <div className="loading">
            <img src={gif} alt="loading" />
        </div>
    )
}

export default Loading;