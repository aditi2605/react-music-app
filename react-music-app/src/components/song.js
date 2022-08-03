import React, { useState } from 'react';

const Song = ({name, clickFunction}) => {
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    // const likeBtn = e => {
    //     // e.preventDefault()
    //     setLiked(prevLiked => !prevLiked)
    //     e.target.style.color = 'blue';
    //     console.log('hello')
    // }

    const likeBtn = () => {
        liked ? setLiked(false) : setLiked(true)
    }

    const dislikeBtn = () => {
        disliked ? setDisliked(false) : setDisliked(true)
    }



    return (
        <li className="listItem" role={name} >
        <span>{name}</span>
        <button type='button' role="likeBtn" style={liked ? {color: 'blue'} : {}} onClick= {likeBtn} className='thumbsUp'><i className="fa-solid fa-thumbs-up"></i></button>
        <button type='button' role="dislikeBtn" style={disliked ? {color: 'blue'} : {}} onClick= {dislikeBtn} className='thumbsDown' ><i className="fa-solid fa-thumbs-down"></i></button>
        <button type='button' role="deleteBtn" onClick= {() => clickFunction(name)} className='deleteBtn' ><i className="fa-solid fa-trash-can"></i></button>
        </li> 
    );
}

export default Song;
