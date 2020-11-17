//single card component
import React from 'react';
import './card.css';

const card=(props)=>{
    return(
        <div className="card" onClick={props.click}>                  
            <div class="imgBox">
                <img src={props.poster} width="180" height="180" alt="movie poster"/>
            </div>
            <div class="contentBox">
                <p>{props.title}</p>
                <p>({props.year})</p>
            </div>
            
        </div>
    )
}

export default card;