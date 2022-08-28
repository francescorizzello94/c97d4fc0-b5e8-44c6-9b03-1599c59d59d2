import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { EventProvider } from './context/EventListContext';

function App() {

  return (
    <EventProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </EventProvider>
  )
}

export default App
