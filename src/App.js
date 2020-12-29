import './reset.css';
import './App.scss';
import Search from './components/Search/Search';
import { FiSearch as SearchIcon } from 'react-icons/fi';
import { GrCart as CartIcon } from 'react-icons/gr';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
    </div>
  );
}


export default App;

const Header = () => {
  return (
    <header className='Header'>
      <nav>
        <ul>
          <li>
            <SearchIcon />
          </li>
          <li>
            <CartIcon />
          </li>
        </ul>
      </nav>
    </header>
  );
}
