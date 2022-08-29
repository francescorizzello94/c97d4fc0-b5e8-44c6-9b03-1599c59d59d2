import './Navbar.css';
import { Search } from '../Search/Search';
import basketLogo from './basket.svg';
import { useEventList } from '../../context/EventListContext';
import { OffPageNavigation } from '../OffPageMenu/OffPageMenu';

export function Navbar() {
  const { listQuantity } = useEventList();
  return (
    <nav className="navbar">
      <Search />
      <button className='cart-icon btn btn-primary'>
        <img src={basketLogo} className="basket" alt="Basket Logo" />
        <span className="number-circle">
          {listQuantity}
          <OffPageNavigation />
        </span>
      </button>
    </nav>
  )
}