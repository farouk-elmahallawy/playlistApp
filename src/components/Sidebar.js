import 'bootstrap/dist/css/bootstrap.css';
import { Fragment } from 'react';
import {useSelector , useDispatch} from 'react-redux'
import { clearSelectedSongs, setSelectedPlaylist } from './redux/playlistSlice';

function Sidebar() {
  
  const playlists = useSelector(state => state.playlist.playlists)
  const dispatch = useDispatch()

  const handlePlaylistClick = (name) =>{
    dispatch(setSelectedPlaylist(playlists.filter(playlist => playlist.name === name)))
    dispatch(clearSelectedSongs())
  }

  return (
    <div className="SideBar col-md-2 col-sm-12 bg-black text-white">
      <p className='text-center mt-3 fw-bold'>Playlists</p>
     <ul className='list-group text-center'>
      {playlists.map((playlist , index) =>{
        return(
          <Fragment key={index}>
            <li className='p-3 bg-dark text-white mb-2' role='button' onClick={()=>handlePlaylistClick(playlist.name)}>{playlist.name}</li>
          </Fragment>
        )
      })}
     </ul>
    </div>
  );
}

export default Sidebar;
