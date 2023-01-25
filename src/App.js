import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Feed from './components/Feed';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Feed />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
