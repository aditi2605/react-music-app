import React, { useState, useEffect } from 'react'
import Song from './song'
import axios from 'axios'

function Album() {

  const [songList, setSongList] = useState(['Kiss Land, 2013', 'My Dear Melancholy, 2018', 'Echoes of Slience, 2011', 'Starboy, 2016','Dawn FM, 2022', 'Beauty Behind the Madness, 2015', 'After Hours, 2020', 'Thursday, 2011']);

  const removeSong = (name) => {
    const newList = songList.filter(song => song !== name)
    setSongList(newList)
  }

  let songs = songList.map((song, i) => <Song name={song} key={i} clickFunction = {removeSong} />)

    const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
        try{
          const { data } = await axios.get("https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime", {headers: {
            'Access-Control-Allow-Origin': '*',
          }} )
          console.log(data)
          setData(data)
        } catch (e) {
          console.warn(`Oops. ${e.message}`)
        }
      }
      getData()
  },[])

 const [color, setColor] = useState(false);
//  const [trigger, setTrigger] = useState(false);

 useEffect (() => {
  console.log('hello')
  const red = Math.floor(Math.random()*255);
  const blue = Math.floor(Math.random()*255);
  const green = Math.floor(Math.random()*255);
  setTimeout(() => (setColor(`rgb(${red}, ${green}, ${blue})`)), 5000)
 }, [color])


//  useEffect (() => {
//   console.log('hello')
//   const red = Math.floor(Math.random()*255);
//   const blue = Math.floor(Math.random()*255);
//   const green = Math.floor(Math.random()*255);
//   setColor(`rgb(${red}, ${green}, ${blue})`)
//   setTimeout(() => (setTrigger(prev => !prev)), 5000)
//  }, [trigger])

  return (
    <div>
      <h2 className="titleHeading">Title : Weeknd's best albums </h2>
      <ul style= {{backgroundColor: color}}>
        {songs}
      </ul>
      {data ? (
        <div>
          <p>{data.lyrics}</p>
        </div>
      ) : (
        <main></main>
      )}
    </div>
  )
}

export default Album

