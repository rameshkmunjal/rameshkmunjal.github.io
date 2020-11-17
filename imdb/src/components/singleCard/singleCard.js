import React from 'react';
import './singleCard.css';

const singleCard=(props)=>(
    <div class="singleCardContainer">
        <button class="backButton" onClick={props.backBtnClick}>Back</button>
        <div className="singleCard">                  
            <div className="singleCardImgBox">
                <img src={props.poster} width="360" height="600" alt="movie poster"/>
            </div>
            <div class="singleCardContentBox">
                <h2 className="movieTitle">{props.title}</h2>
                <p className="movieYear">({props.year})</p>
                <p><b>Rating : </b>{props.rating}</p>
                <p><b>Genre : </b>{props.genre}</p>
                <p><b>Director : </b>{props.director}</p>
                <p><b>Plot : </b> {props.plot}</p>
                
            </div>            
        </div>

    </div>
        
)

export default singleCard;