import './reset.css';
import './App.scss';
import Search from './components/Search/Search';
import { FiSearch as SearchIcon } from 'react-icons/fi';
import { GrCart as CartIcon } from 'react-icons/gr';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Fast Movie Search
        </h1>
      </header>
      <Search />
      <Navigation />
    </div>
  );
}


export default App;

const Navigation = () => {
  return (
    <nav className='Navigation'>
      <ul>
        <li>
          <SearchIcon />
        </li>
        <li>
          <CartIcon />
        </li>
      </ul>
    </nav>
  );
}
