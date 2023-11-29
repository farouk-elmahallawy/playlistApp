import {useSelector , useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { searchChange } from './redux/playlistSlice';


function SearchBar() {

    const dispatch = useDispatch()
    const searchValue = useSelector(state => state.playlist.searchValue)
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(searchChange(''))
    }
  return (
    <div className="SearchBar my-3 px-5">
      <h3 className='fw-bold text-white mt-5 pt-4 ps-3'>Recommended Songs</h3>
        <form onSubmit={(e)=> handleSubmit(e)}>
            <input className='bg-transparent border-0 text-white-50 my-3 mx-5' type='search' value={searchValue} placeholder='Filter' onChange={(e)=>dispatch(searchChange(e.target.value))}/>
        </form>
    </div>
  );
}

export default SearchBar;
