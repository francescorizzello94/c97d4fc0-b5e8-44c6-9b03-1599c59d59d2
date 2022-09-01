import './Navbar.css';
import basketLogo from './basket.svg';
import { useEventList } from '../../context/EventListContext';
import { OffPageNavigation } from '../OffPageMenu/OffPageMenu';

export function Navbar() {
  const { listQuantity } = useEventList();
  return (
    <nav className="navbar">
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