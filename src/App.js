import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './components/Sidebar';
import PlayListBody from './components/playListBody';
import SearchBar from './components/SearchBar';
import SongsList from './components/SongsList';
import PlayListContainer from './components/PlayListContainer';

function App() {
  
  return (
    <div className="App row m-0 overflow-hidden" style={{minHeight: 1000}}>
      <Sidebar/>
      <PlayListContainer>
          <PlayListBody/>
          <SearchBar/>
          <SongsList/>
      </PlayListContainer>
    
    </div>
  );
}

export default App;
