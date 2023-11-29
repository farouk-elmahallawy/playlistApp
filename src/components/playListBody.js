import 'bootstrap/dist/css/bootstrap.css';
import {useSelector , useDispatch} from 'react-redux'
import playListPhoto from './images/healthcare-gym.jpg'
import { Fragment, useState } from 'react';
import { addPlaylist, deletePlaylist, deleteSong, setSelectedPlaylist } from './redux/playlistSlice';
import { Button, Form, Modal } from 'react-bootstrap';

function PlayListBody(){

    const playlists = useSelector(state=> state.playlist.playlists)
    const view = useSelector(state=> state.playlist.selectedPlaylist)
    const [options,setOptions] = useState(false)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [playlistName, setPlaylistName] = useState('');
    const [playlistDescription, setPlaylistDescription] = useState('');

    const handleCreatePlaylistClick = () =>{
        setOptions(!options)
        setShow(true)
        
    }
    const handleDelete = () =>{
      setOptions(!options)
      dispatch(deletePlaylist(view[0].name))
      dispatch(setSelectedPlaylist(playlists.filter(playlist => playlist.name !== view[0].name)))
    }
    const handleCreatePlaylist = () =>{
        const date = new Date()
        if(playlistName){
            dispatch(addPlaylist({
                name:playlistName,
                description:playlistDescription,
                user:"Ari Vaniderstine",
                date:date.toLocaleDateString(),
                songs:[]
            }))
        }
        setPlaylistName('')
        setPlaylistDescription('')
        setShow(false)
    }

    return(
        <div className='row px-md-5'>
        <div className='row col m-3'>
          <img style={{width:300, height:300}} className='p-0' src={playListPhoto} alt='PlayListPhoto'/>
         <div className='col d-flex align-items-end ms-3'>
         <div>
         <p>PLAYLIST</p>
          <h1 className='fw-bold'>{view[0]? view[0].name :playlists[0].name}</h1>
          <p className='text-white-50'>{view[0]? view[0].description : playlists[0].description}</p>
          <p className='text-white-50'>Created by : <span className='text-white'> {view[0] ? view[0].user : playlists[0].user} </span>. {view[0]? view[0].songs.length : playlists[0].songs.length} songs</p>
          <form className='d-flex align-items-center'>
            <button type='button' className='btn btn-success me-3' style={{width:130, borderRadius:50,height:40}}>PLAY</button>
            <button type='button' className='rounded-circle fs-5 bg-transparent text-white border-white pb-2 px-2 fw-bold' onClick={()=>setOptions(!options)} >. . .</button>
          </form>
          {options?
        <ul className='list-group position-absolute ms-5 mt-3'>
            <li className='list-group-item list-group-item-action list-group-item-dark px-5' role='button' onClick={()=>setOptions(!options)}>Go to Playlist Radio</li>
            <li className='list-group-item list-group-item-action list-group-item-dark px-5 border-bottom-0 ' role='button' onClick={()=>setOptions(!options)}>Collaborative Playlist</li>
            <li className='list-group-item list-group-item-action list-group-item-dark px-5' role='button' onClick={()=>setOptions(!options)}>Make Secret</li>
            <li className='list-group-item list-group-item-action list-group-item-dark px-5 border-bottom-0' role='button' onClick={()=>setOptions(!options)}>Edit Details</li>
            <li className='list-group-item  list-group-item-dark px-5 border-bottom-0 text-black-50' role='button'>Report</li>
            <li className='list-group-item list-group-item-action list-group-item-dark px-5' role='button' onClick={handleDelete}>Delete</li>
            <li className='list-group-item list-group-item-action list-group-item-dark px-5 border-bottom-0' role='button' onClick={handleCreatePlaylistClick}>Create Similar Playlist</li>
            <li className='list-group-item list-group-item-action list-group-item-dark px-5 border-bottom-0' role='button' onClick={()=>setOptions(!options)}>Download</li>
            <li className='list-group-item list-group-item-action list-group-item-dark px-5 border-bottom-0' role='button' onClick={()=>setOptions(!options)}>Share</li>
          </ul>: null  
        }
        <Modal className='text-white' show={show} onHide={()=>setShow(false)}>
        <Modal.Header className='bg-black border-bottom-0' closeButton>
          <Modal.Title >Playlist Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-black'>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
              className='bg-black text-white'
                type="text"
                placeholder="PlayList Name"
                autoFocus
                onChange={(e)=>setPlaylistName(e.target.value)}
              />
              <Form.Label className='pt-3'>Description</Form.Label>
              <Form.Control
              className='bg-black text-white'
                type="text"
                placeholder="PlayList Description"
                onChange={(e)=>setPlaylistDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='bg-black border-top-0'>
          <Button variant="secondary" onClick={()=>setShow(false)}>
            Close
          </Button>
          <Button variant="success" onClick={handleCreatePlaylist}>
            Create PlayList
          </Button>
        </Modal.Footer>
      </Modal>
         </div>
         </div>
        </div>
        <div className='col d-flex align-items-end justify-content-end pe-5'>
          <div className='text-end text-white-50'>
          <p>FOLLOWERS</p>
          <p>0</p>
          </div>
        </div>
        {view[0]?.songs.length > 0 ?
        <div className='table-responsive-md'>
        <table className='w-100 table table-hover table-dark'>
        <thead>
          <tr className='p-md-3 ps-md-5 text-center text-white-50'>
            <th className='p-md-3 ps-md-5 text-start'>TITLE</th>
            <th className='p-md-3 ps-md-5'>SONG NAME</th>
            <th className='p-md-3 ps-md-5'>ALBUM</th>
            <th className='p-md-3 ps-md-5'>ADDED AT</th>
            <th className='p-md-3 ps-md-5'>DURATION</th>
          </tr>
        </thead>
        <tbody>
          {
            view[0]?.songs.map(song =>{
                const date = new Date()
              return(
                <Fragment key={song.id}>
                      <tr className=' text-center'>
                        <td className="p-md-3 text-start"> {song.title}</td>
                        <td className='p-md-3'>{song.singer}</td>
                        <td className='p-md-3'>{song.genre}</td>
                        <td className='p-md-3 text-white-50'>{date.toLocaleDateString()}</td>
                        <td className='p-md-3 text-white-50'>{song.id*3}:00 <button title='Delete Song' className='btn btn-danger ms-3' onClick={()=>dispatch(deleteSong(song.id))}>-</button></td>
                      </tr>
                </Fragment>
              )
            })
          }
        </tbody>
        </table>
        </div>
        :
        <h3 className='text-center text-white-50 mt-5 mb-3'>No Songs To Show</h3>
    }
      </div>
    )
}

export default PlayListBody;