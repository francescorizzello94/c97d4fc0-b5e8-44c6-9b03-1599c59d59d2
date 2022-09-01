import { CloseButton, Offcanvas, Stack } from 'react-bootstrap';
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
        <Offcanvas className="offcanvas-container" show={show} onHide={handleClose} {...props} placement="end" style={{background: 'black'}}>
          <Offcanvas.Header>
            <Offcanvas.Title style={{background: 'black', color: 'white'}} />
          </Offcanvas.Header>
          <CloseButton className="up-button" onClick={handleClose} style={{background: 'purple', display: 'flex', flexDirection: 'row-reverse'}}>Back to top</CloseButton>
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
