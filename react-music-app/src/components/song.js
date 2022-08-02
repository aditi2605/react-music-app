import React, { useState } from 'react';

const Song = ({name}) => {
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
        <li className="listItem">
        {name}
        <button type='button' onClick= {likeBtn} className='thumbsUp'><i class="fa-solid fa-thumbs-up"></i></button>
        <button type='button' onClick= {DislikeBtn} className='thumbsDown' ><i class="fa-solid fa-thumbs-down"></i></button>
        </li> 
    );
}

export default Song;
