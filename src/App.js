import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth';


const require = createRequire(import.meta.url);

function App() {
  return (
    <div className='app'>
      <Auth/>
    </div>
  );
}

export default App;
