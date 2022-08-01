import React, { useState } from 'react';

const Song = ({name}) => {
    const [liked, setLiked] = useState();

    const changeLike = (e) => {
        if (liked){
            setLiked(prevlike => !prevlike);
            e.target.style.backgroundColor = 'white'

        } else{
            setLiked(prevlike => !prevlike);
            e.target.style.backgroundColor = 'green'
        }
    }

    return (
        <li onClick={changeLike} className="listItem">
        {name}
        </li> 
    );
}

export default Song;
