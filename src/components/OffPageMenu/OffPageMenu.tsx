import { Offcanvas, Stack } from 'react-bootstrap';
import { useState } from 'react';
import { EventListProviderProps, useEventList } from '../../context/EventListContext';
import { ListItem } from '../ListItem/ListItem';
import './OffPageMenu.css';


const options = [
  {
    name: 'View your Events',
    scroll: true,
    backdrop: true,
  },
];


function OffPageMenu({ name, ...props }: EventListProviderProps) {
  const [show, setShow] = useState(false);
  const { listItems } = useEventList();

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <button className='toggle-offcanvas' onClick={toggleShow}>
        {name}
      </button>
      <div className="offcanvas">
        <Offcanvas show={show} onHide={handleClose} {...props} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Stack gap={3}>
              {listItems.map(item => (
                <ListItem key={item._id} {...item} />
              ))}
            </Stack>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export function OffPageNavigation() {
  return (
    <>
      {options.map((props, idx) => (
        <OffPageMenu key={idx} {...props} />
      ))}
    </>
  )
}
