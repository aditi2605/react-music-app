import React from 'react'
import Song from './song'
function Album() {

  const songList = ['Kiss Land, 2013', 'My Dear Melancholy, 2018', 'Echoes of Slience, 2011', 'Starboy, 2016','Dawn FM, 2022', 'Beauty Behind the Madness, 2015', 'After Hours, 2020', 'Thursday, 2011'];

  const songs = songList.map(song => <Song name={song}/>)
  return (
    <div>
      <h1 className="titleHeading">Title : Weeknd's best albums </h1>
      <ul>
        {songs}
      </ul>
    </div>
  )
}

export default Album

