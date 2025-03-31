import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../redux/store'
import { getGenre } from '../../redux/slices/genreSlice'
import './Genre.css'


const Genre = ({setSelectedGenre}) => {
  const { genres } = useSelector((store)=> store.genre)
  const dispatch = useDispatch();

  const [activeGenre, setActiveGenre] = useState(null)


  const handleGenre = ( genre) =>{
    setSelectedGenre(genre)
    setActiveGenre(genre.id)
  }
  useEffect(() => { // ilk render edildiğinde bu fonksiyon çalışsın demek aslında
    dispatch(getGenre())
  }, [])
  return (
    <div className='genres'>
      <ul>    
          {genres && genres.map((genre )=>(
            <li 
              className={`${activeGenre === genre.id ? 'active' : ''}`}
              onClick={() =>handleGenre(genre)} 
              key={genre.id}>{genre.name}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Genre
