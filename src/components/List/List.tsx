import './List.css';
import { Event } from '../Types';

export function List ({ items }: Event) { 
  return (
    <ul className="event-list-container">
      {Array.from(items).map((item) => (
        <li className="event-list-item" key={item.field}>
          <span>{item.field}</span>
          { item.value}
        </li>
      ))}
    </ul>
  )
}