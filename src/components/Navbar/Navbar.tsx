import './Navbar.css';
import { Search } from '../Search/Search';
import basketLogo from './basket.svg';

export function Navbar() {
  return (
    <nav className="navbar">
      <Search />
      <button className='cart-icon'>
        <img src={ basketLogo } className="basket" alt="Basket Logo" />
        </button>
    </nav>
  )
}