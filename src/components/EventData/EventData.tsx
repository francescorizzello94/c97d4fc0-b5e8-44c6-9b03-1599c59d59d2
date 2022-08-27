import './EventData.css';
import { Card } from 'react-bootstrap';
import moment from 'moment';
import { GeneralDateFormatter, TimeFormatter } from '../../utilities/DateFormatter';

export interface JSONType {
  _id: string;
  title: string;
  flyerFront?: string | null;
  attending: number;
  date: string;
  startTime?: string | null;
  endTime?: string | null;
  contentUrl: string;
  venue: Venue;
  pick?: Pick | null;
  artists?: (ArtistsEntity | null)[] | null;
  city: string;
  country: string;
  privateParty: boolean;
  __v: number;
}
export interface Venue {
  id: string;
  name: string;
  contentUrl?: string | null;
  live: boolean;
  direction: string;
}
export interface Pick {
  id: string;
  blurb: string;
}
export interface ArtistsEntity {
  id: string;
  name: string;
  _id: Id;
}
export interface Id {
  $oid: string;
}


export function EventData(
  {
    _id,
    title,
    flyerFront,
    attending,
    date,
    startTime,
    endTime,
    contentUrl,
    venue,
    pick,
    artists,
    city,
    country,
    privateParty,
    __v,
  }
    : JSONType
) {
  return (
    <>
      <Card className='card-element'>
        <Card.Img
          style={{ width: "17rem" }}
          variant="top"
          src={flyerFront}
          alt="flyer image"
        />
        <Card.Body>
          <Card.Text className="card-text">
            <Card.Title>
              <span className="card-title">{title}</span>
            </Card.Title>
            {venue.name}, {city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()} <br /><br />
            Save the Date: <Card.Text style={{ color: "orange" }}> {GeneralDateFormatter(date)} </Card.Text><br />
            From:<br /> {TimeFormatter(startTime)} <br />
            To: <br /> {TimeFormatter(endTime)}<br />
            Attending: <br /> {attending}
          </Card.Text>
          <Card.Link className="card-link" href={venue.direction}>
            Maps
          </Card.Link>
        </Card.Body>

      </Card>
    </>
  )
}