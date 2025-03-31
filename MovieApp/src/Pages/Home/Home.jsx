import React, { useState } from 'react'
import Genre from '../../components/Genre/Genre'
import MovieList from '../../components/MovieList/MovieList'

const Home = () => {

  const [selectedGenre, setSelectedGenre] = useState(null) // selectedGenre= depo  setSelectedGenre=depocu
  
  
  return (
    <div className='Home'>
      <Genre setSelectedGenre={setSelectedGenre}/>
      <MovieList selectedGenre={selectedGenre}/>
    </div>
  )
}

export default Home
