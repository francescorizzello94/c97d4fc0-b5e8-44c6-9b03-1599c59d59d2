import './Navbar.css';
import { Search } from '../Search/Search';

export function Navbar() { 
  return (
    <nav className="navbar">
      <Search />
    </nav>
  )
}