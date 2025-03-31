import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_GENRE, API_KEY } from '../../constants/api'

const initialState = {
    genres: [],
}
// Aşağıda yazılan kod aslında const res için yazılan kodun uzun hali biz kısaltmak ve statik olmasın diye zaten b u hale getirmiştik
// axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=041ba9b4e6a6c935047b4772495442f8")
export const getGenre = createAsyncThunk('getGenres', async () => {
    const res = await axios.get(`${API_GENRE}?api_key=${API_KEY}`)
    return res.data.genres;
})
export const genreSlice = createSlice({
    name: 'genre',
    initialState,
    reducers: {}, //
    extraReducers: (builder) => { // HTTP request
        builder.addCase(getGenre.fulfilled, (state, action) => {
            state.genres=action.payload

        })
    }
})


export const { } = genreSlice.actions

export default genreSlice.reducer