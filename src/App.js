import Appbar from './components/appbar/appbar';
import Navbar from './components/navbar/navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Appbar />
      <div className='container'>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
