import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_MOVIE_LİST, API_KEY } from '../../constants/api'

const initialState = {
    movieList: [],
    status: 'idle', // idle başlangıç durumunu temsil ediyor hiçbir şey 
    error: null
}
// Aşağıda yazılan kod aslında const res için yazılan kodun uzun hali biz kısaltmak ve statik olmasın diye zaten b u hale getirmiştik
// axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=041ba9b4e6a6c935047b4772495442f8")


export const getMovieList = createAsyncThunk('getMovieList', async () => {
    const res = await axios.get(`${API_MOVIE_LİST}?api_key=${API_KEY}`)
    return res.data.results;
})

export const getMovieListByGenre= createAsyncThunk('getMovieListByGenre', async (id) => {
    const res = await axios.get(`${API_MOVIE_LİST}?api_key=${API_KEY}&with_genres=${id}`)
    return res.data.results;
})


export const movieListSlice = createSlice({
    name: 'movieList',
    initialState,
    reducers: {}, //
    extraReducers: (builder) => { // HTTP request http ye istek atıyoruz 
       builder.addCase(getMovieList.pending, (state, action)=>{
        state.status= action.meta.requestStatus
       })
        builder.addCase(getMovieList.fulfilled, (state, action) => { //fulfilled api ye atılan istek başarılı
            state.status=action.meta.requestStatus
            state.movieList=action.payload

        })
        builder.addCase(getMovieList.rejected,(state ,action)=>{
            state.status= action.meta.requestStatus
            state.error= action.error.message
        })
        builder.addCase(getMovieListByGenre.fulfilled, (state, action) =>{
            state.movieList =action.payload
        })
    }
})


export const { } = movieListSlice.actions

export default movieListSlice.reducer