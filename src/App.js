import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Routes, Route, Outlet, NavLink, useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import Alert from 'react-bootstrap/Alert';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';


import './App.css';

const Home = () => <span>Accueil</span>;

const About = () => <span>À propos de <u>Web Apps Conception</u></span>;

const Action = () => {
  const { id } = useParams();
  return (
    <span>Action {id}</span>
  );
}

const AlertDismissibleExample = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <React.Fragment>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </React.Fragment>
  );
}

const Notification = () => {
  return (
    <React.Fragment>
      <span>Notification</span>
      <br /><br />
      <ExampleToast>
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
    </React.Fragment>
  );
}

const App = () => (
  <MemoryRouter>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            alt="Logo Web Apps Conception"
            src="/assets/images/favicon-64x64.png"
            width="32"
            height="32"
            className="d-inline-block align-top"
          />{' '}
          Web Apps Conception
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Accueil</Nav.Link>
            <NavDropdown title="Actions" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/action/1">Action 1</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/action/2">Action 2</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/action/3">Action 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/action/4">Action 4</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/notif">Notification</Nav.Link>
            <Nav.Link as={NavLink} to="/about">À propos de</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header">Bienvenue sur mon premier site React Bootstrap</h1>
        <br />
        <h2>
          La page actuelle est{' '}
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/notif" element={<Notification />} />
            <Route exact path="/action/:id" element={<Action />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </h2>
      </Container>
    </Container>
  </MemoryRouter>
);

export default App;
