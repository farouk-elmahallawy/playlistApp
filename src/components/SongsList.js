import { Fragment } from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { setSelectedPlaylistSongs, setSelectedSongs } from './redux/playlistSlice'
import { AiOutlineCheck } from "react-icons/ai";


function SongsList() {

    const handleClick = (e) =>{
        dispatch(setSelectedSongs(e.target.id))
        dispatch(setSelectedPlaylistSongs(songs.filter(song => song.id === Number(e.target.id))))
      }
    const songs = useSelector(state => state.playlist.songs)
    const selectedSongs = useSelector(state => state.playlist.selectedSongs)
    const seachValue = useSelector(state => state.playlist.searchValue)
    const filteredSongs = songs.filter(song => song.title.toLowerCase().includes(seachValue.toLowerCase()))
    const dispatch = useDispatch()
    const date = new Date()

    return(
        <div className='mx-auto px-md-5 table-responsive-md'>
        <table className='table table-hover table-dark'>
        <thead>
          <tr className='text-center text-white-50'>
            <th className=' p-md-3 ps-md-5 text-start'>TITLE</th>
            <th className=' p-md-3 ps-md-5'>SONG NAME</th>
            <th className=' p-md-3 ps-md-5'>ALBUM</th>
            <th className=' p-md-3 ps-md-5'>ADDED AT</th>
            <th className=' p-md-3 ps-md-5'>DURATION</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredSongs.map(song =>{
              return(
                <Fragment key={song.id}>
          <tr className='text-center'>
            <td className="p-md-3 text-start"> <button  id={song.id} onClick={(e)=>handleClick(e)} className='bg-transparent me-md-5 border-0 text-white-50 fs-3' disabled={selectedSongs.includes(`${song.id}`) }>{selectedSongs.includes(`${song.id}`)? <AiOutlineCheck/> : "+" }</button> {song.title}</td>
            <td className='p-md-3'>{song.singer}</td>
            <td className='p-md-3'>{song.genre}</td>
            <td className='p-md-3 text-white-50'>{date.toLocaleDateString()}</td>
            <td className='p-md-3 text-white-50'>{song.id*3}:00</td>
          </tr>
                </Fragment>
              )
            })
          }
        </tbody>
        </table>
        </div>
    )
}

export default SongsList;