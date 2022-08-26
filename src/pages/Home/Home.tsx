import './Home.css';
import { useEffect, useState } from 'react';
import { List } from '../List/List';

export function Home() {

  const [events, setEvents] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchEvents() {
      const event = await fetch("https://tlv-events-app.herokuapp.com/events/uk/london");
      const information = await event.json();

      if (information) {
        setEvents(information);
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);


  return (
    <main>
      <h1>Public Events</h1>
      <section className="events">
        {
          loading
            ?
            (<span>Loading...</span>)
            :
            <List
              items={events.map((element) => ({
                field: element.id,
                value: (
                <div>
                    {events.id}
                  </div>
                ),
              }))}
            />
        }
      </section>
    </main>
  )
}