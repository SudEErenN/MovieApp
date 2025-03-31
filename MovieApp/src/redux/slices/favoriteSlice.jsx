import { createSlice } from "@reduxjs/toolkit";
import { getItemFromStorage, setItemToStorage } from "../storage/storageService";


const initialState ={
    favoriteMovies : getItemFromStorage ('favorite')
}

export const favoriteSlice = createSlice({
    name : 'favoriteSlice',
    initialState,
    reducers : {
        addToFavorite : (state, action) =>{
            const findMovie = state.favoriteMovies ?.some(movie => movie.id === action.payload.id)
            if(!findMovie){
                state.favoriteMovies = [...state.favoriteMovies, action.payload] // ekleme yaptık aslında action.payload ile
                setItemToStorage('favorite' ,state.favoriteMovies)
            }
        },

        removeFavorite : (state ,action) =>{
            const filteredMovies = state.favoriteMovies?.filter(movie => movie.id !== action.payload.id)
            state.favoriteMovies= filteredMovies
            setItemToStorage('favorite', state.favoriteMovies)
        }
    },
    // apı ya istek atsaydık extraReducers ı kullancaktık ama aynı yerin içinde olduğu için reducers da tanımlıyoruz
})

export const {addToFavorite, removeFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;