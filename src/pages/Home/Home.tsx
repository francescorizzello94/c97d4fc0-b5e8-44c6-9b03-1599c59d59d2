import './Home.css';
import eventData from '../../data/data.json';
import { EventData } from '../../components/EventData/EventData';

export function Home() {

  return (
    <>
      <h1>Public Events</h1>
      <main>
        <section className="events">
          {eventData.map(item => (
            <div key={item._id}>
              <EventData {...item} />
            </div>
          ))}
        </section>
      </main>
    </>
  )
}