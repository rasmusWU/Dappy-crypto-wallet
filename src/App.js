import './App.scss';
import { Router } from '@reach/router';
import FrontPage from './FrontPage';

function App() {
  return (
    <div className="App">
      <Router>
        <FrontPage default/>
      </Router>
    </div>
  );
}

export default App;
