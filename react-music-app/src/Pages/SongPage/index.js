import React,{useEffect, useState} from 'react';
import axios from 'axios'

const SongPage = () => {

    const [lyrics, setLyrics] = useState()

    useEffect(() => {
        const getData = async () => {
            try{
              const { data } = await axios.get("https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime", {headers: {
                'Access-Control-Allow-Origin': '*',
              }} )
              console.log(data)
              setLyrics(data.lyrics)
            } catch (e) {
              console.warn(`Oops. ${e.message}`)
            }
          }
          getData()
      },[])

    return (
        <>
            <h1>Song Title</h1>
            {lyrics ? 
            (<main><p>{lyrics}</p></main>) : 
            (<main><p>Loading lyrics...</p></main>)}
        </>
    );
}

export default SongPage;
