import './EventData.css';
import { Card } from 'react-bootstrap';

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
    <div>
      <Card>
        <Card.Body>
          <Card.Img
            style={{ width: "17rem" }}
            variant="top"
            src={flyerFront}
          />
          <Card.Text>
            Some text
          </Card.Text>
          <Card.Link href={venue.direction} />
        </Card.Body>
      </Card>
    </div>
  )
}