import React from 'react'
import { use } from 'react'
import {useSelector} from 'react-redux'
import MovieCard from '../../components/MovieCard/MovieCard'
import './MyList.css'

const MyList = () => {


const {favoriteMovies} = useSelector (store => store.favorite)
  return (
    <div className='my-list'>
      <ul>
        {
          favoriteMovies ?.map((movie) =>
            <MovieCard  key={movie.id} movie={movie}/>
          )
        }
      </ul>
    </div>
  )
}

export default MyList
