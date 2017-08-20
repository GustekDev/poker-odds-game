import * as React from 'react';
import { Route, Link, match } from 'react-router-dom';
import PracticeComponent from './game/components/practice/PracticeComponent';

const navbarInstance = (
  <ul>
    <Link to="/">Poker Odds Game</Link>
    <Link to="/practice/hand-reading">Practice hands</Link>
    <Link to="/practice/outs-counting">Practice outs</Link>
  </ul>
);

interface PracticeRouteParams {
  match: match<PracticeParams>;
}

interface PracticeParams {
  game: GameName;
}

const Practice = (params: PracticeRouteParams) => <PracticeComponent game={params.match.params.game} />;

class App extends React.Component<{}, null> {
  render() {
    return (
      <div>
        {navbarInstance}
        <Route exact={true} path="/" render={() => <div>Hello</div>} />
        <Route exact={true} path="/practice/:game" component={(props: any) => Practice(props)} />
      </div>
    );
  }
}

export default App;
