import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { List } from './pages/List/List';
import { Navbar } from './components/Navbar/Navbar';

function App() {

  return (
    <>
      <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/list' element={ <List />} />
      </Routes>
    </>
  )
}

export default App
