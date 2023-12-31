import { configureStore } from "@reduxjs/toolkit";
import playlistSlice from "./playlistSlice";


 const store = configureStore({
    reducer: {
        playlist: playlistSlice
    }
})

export default store