import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_MOVIE_DETAIL, API_KEY } from '../../constants/api'
import MovieDetail from '../../Pages/MovieDetail/MovieDetail'

const initialState = {
    movieDetail: {},
    status: 'idle', // idle başlangıç durumunu temsil ediyor hiçbir şey 
    error: null
}
// Aşağıda yazılan kod aslında const res için yazılan kodun uzun hali biz kısaltmak ve statik olmasın diye zaten b u hale getirmiştik
// axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=041ba9b4e6a6c935047b4772495442f8")


export const getMovieDetailById = createAsyncThunk('getMovieDetailById', async (id) => {
    const res = await axios.get(`${API_MOVIE_DETAIL}/${id}?api_key=${API_KEY}`)
    return res.data;
})



export const movieDetailSlice = createSlice({
    name: 'movieDetail',
    initialState,
    reducers: {}, //
    extraReducers: (builder) => { // HTTP request http ye istek atıyoruz 
       builder.addCase(getMovieDetailById.fulfilled, (state, action)=>{
        state.movieDetail=action.payload;
       })
    }
})


export const { } = movieDetailSlice.actions

export default movieDetailSlice.reducer