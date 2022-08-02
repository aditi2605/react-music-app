import React, { useState } from 'react';

const Song = ({name, clickFunction}) => {
    const [liked, setLiked] = useState();
    const [disliked, setdisliked] = useState();

    const likeBtn = e => {
        e.preventDefault()
        setLiked(prevLiked => !prevLiked)
        e.target.style.color = 'blue';
        console.log('hello')
    }

    const DislikeBtn = e => {
        e.preventDefault()
        setdisliked(prevdisliked => !prevdisliked)
        e.target.style.color = 'blue';
    }



    return (
        <li className="listItem" role={name} >
        <span>{name}</span>
        <button type='button' role="likeBtn" onClick= {likeBtn} className='thumbsUp'><i class="fa-solid fa-thumbs-up"></i></button>
        <button type='button' role="dislikeBtn" onClick= {DislikeBtn} className='thumbsDown' ><i class="fa-solid fa-thumbs-down"></i></button>
        <button type='button' role="deleteBtn" onClick= {() => clickFunction(name)} className='thumbsDown' ><i class="fa-solid fa-trash-can"></i></button>
        </li> 
    );
}

export default Song;
