import './Navbar.css';
import { Search } from '../Search/Search';
import basketLogo from './basket.svg';
import { useEventList } from '../../context/EventListContext';

export function Navbar() {
  const { openList, listQuantity } = useEventList();
  return (
    <nav className="navbar">
      <Search />
      <button className='cart-icon' onClick={openList}>
        <img src={basketLogo} className="basket" alt="Basket Logo" />
        <span className="number-circle">
          {listQuantity}
        </span>
      </button>
    </nav>
  )
}