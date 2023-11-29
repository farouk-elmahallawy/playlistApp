import { createSlice } from "@reduxjs/toolkit";
import songs from "../songs";

const playlistSlice = createSlice({
    name:"playlist",
    initialState :{
        playlists:[
          {
              name:"Driving",
              description:"Pop jams for the car",
              user: "Ari Vaniderstine",
              date:"",
              songs:[]
          },
        ],
        selectedPlaylist:[{name:"Driving",description:"Pop jams for the car",user: "Ari Vaniderstine",date:"",songs:[]}],
        songs:songs,
        selectedSongs:[],
        searchValue:'',
        pending:false,
        error:""
    },
    reducers:{
        searchChange: (state, action) => {
            state.searchValue = action.payload
          },
        setSelectedSongs: (state, action) => {
            state.selectedSongs.push(action.payload) 
          },
          clearSelectedSongs: (state, action) => {
            state.selectedSongs = []
          },
          addPlaylist: (state, action) => {
            state.playlists.push(action.payload)
          },
          deletePlaylist: (state, action) => {
            state.playlists = state.playlists.filter(playlist => playlist.name !== action.payload)
            state.selectedPlaylist = state.selectedPlaylist.filter(current => current.name !== action.payload)
          },
          setSelectedPlaylist: (state , action) =>{
            state.selectedPlaylist = action.payload
          },
          setSelectedPlaylistSongs: (state , action) =>{
            for(const playlist of state.playlists){
                if(playlist.name === state.selectedPlaylist[0].name){
                    playlist.songs.push(...action.payload)
                  }
                }
                state.selectedPlaylist[0].songs.push(...action.payload)
          },
          deleteSong: (state , action) =>{
            for(const playlist of state.playlists){
              if(playlist.name === state.selectedPlaylist[0].name){
                 playlist.songs = playlist.songs.filter(song => song.id !== action.payload)
                state.selectedSongs = state.selectedSongs.filter(song => song !== `${action.payload}` )
                }
              }
             state.selectedPlaylist[0].songs = state.selectedPlaylist[0].songs.filter(song => song.id !== action.payload)
          },
    }
})
export default playlistSlice.reducer

export const {searchChange , setSelectedSongs , addPlaylist , setSelectedPlaylist , setSelectedPlaylistSongs , clearSelectedSongs , deleteSong ,deletePlaylist} = playlistSlice.actions