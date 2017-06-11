import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import './poker/cards.css';
import PracticeComponenet from './game/components/practice/PracticeComponent';

const practice = (match: any) => {
    return (<PracticeComponenet game={match.params.game} />);
}

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Router>
            <div>
              <h2>Accounts</h2>
              <ul>
                <li><Link to="/practice/hands">Practice hands</Link></li>
                <li><Link to="/practice/outs">Practice outs</Link></li>
              </ul>
              <Route path="/practice/:game" render={({ match }) => practice(match)} />
            </div>
          </Router>
        </div>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
