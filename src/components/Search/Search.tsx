import './Search.css';
import eventData from '../../data/data.json';
import { useState } from 'react';


export const Search: React.FC = () => {
  const [text, setText] = useState('');

  return (
    <>
      <div className="bar-wrapper">
        <input
          type="text"
          className="bar"
          placeholder="Search..."
          value={text}
          onChange={(element) => setText(element.target.value)}
          onClick={filterEvents}
        />
      </div>
    </>
  )

  function filterEvents() {
    eventData.filter((element) => {
      if (!text) {
        return null;
      } else if (
        element.title.toLowerCase().includes(text.toLocaleLowerCase())) return element;
    })
      .map((element, title) => (
        <div key={title}>
          <div>
            {element.title}
          </div>
        </div>
      ))
  }
}