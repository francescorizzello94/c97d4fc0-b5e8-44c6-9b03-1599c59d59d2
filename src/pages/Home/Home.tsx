import './Home.css';
import eventData from '../../data/data.json';
import { EventData } from '../../components/EventData/EventData';

export function Home() {
  return (
    <>
      <h1>Events in the City</h1>
      <main>
        <section className="events">
          {eventData.sort((x , y) => { 
            return new Date(y.date).getTime() - new Date(x.date).getTime();
          })
            .map(item => (
            <div key={item._id}>
              <EventData {...item} />
            </div>
          ))}
        </section>
      </main>
    </>
  )
}