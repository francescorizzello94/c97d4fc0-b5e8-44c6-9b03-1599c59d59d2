import { Offcanvas } from 'react-bootstrap';
import { useState } from 'react';
import './OffPageMenu.css';


const options = [
  {
    name: 'View your Events',
    scroll: true,
    backdrop: true,
  },
];


function OffPageMenu({ name, ...props }) {
  const [show, setShow] = useState(false);

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
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc
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
