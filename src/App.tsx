import * as React from 'react';
import { Route, NavLink, Link, match } from 'react-router-dom';
import PracticeComponent from './game/components/practice/PracticeComponent';
import * as Game from './lib/poker/game';

const navbarInstance = (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <Link to="/">Poker Odds Game</Link>
    <ul className="navbar-nav">
      <li className="nav-item"><NavLink className="nav-link" to="/practice/hand-reading">Practice hands</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link" to="/practice/outs-counting">Practice outs</NavLink></li>
    </ul>
  </nav>
);

interface PracticeRouteParams {
  match: match<PracticeParams>;
}

interface PracticeParams {
  game: Game.GameName;
}

const Practice = (params: PracticeRouteParams) => <PracticeComponent game={params.match.params.game} />;

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>  
      {navbarInstance}
        <main className="container" role="main">
          <Route exact={true} path="/" render={() => <div>Hello</div>} />
          <Route exact={true} path="/practice/:game" component={(props: any) => Practice(props)} />
        </main>
      </div>
    );
  }
}

export default App;
