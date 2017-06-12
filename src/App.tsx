import * as React from 'react';
import {
  Route, NavLink as Link
} from 'react-router-dom'
import './poker/cards.css';
import PracticeComponenet from './game/components/practice/PracticeComponent';
import { Navbar, Nav, NavItem, Row, Col, Grid } from 'react-bootstrap';

const practice = (match: any) => {
  return (<PracticeComponenet game={match.params.game} />);
}

const navbarInstance = (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Poker Odds Game</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem href="/practice/hands">
          <Link to="/practice/hands">Practice hands</Link>
        </NavItem>
        <NavItem href="/practice/outs">
          <Link to="/practice/outs">Practice outs</Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

class App extends React.Component<{}, null> {
  render() {
    return (
      <Grid>
        <Row>
          <Col>{navbarInstance}</Col>
        </Row>
        <Row>
          <Col className="center-block text-center">
            <Route exact path="/" render={() => (<div>Hello</div>)} />
            <Route path="/practice/:game" render={({ match }) => practice(match)} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
