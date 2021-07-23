import './App.css';
import ShowTables from "./ShowTables"
import HeroCards from './HeroCards'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <header className = "herocards-route">
      <Link to = "/herocards">Trending </Link>
        </header>
        <Route path = '/herocards'>
           <HeroCards/>
          </Route>
        <Link to = '/'>
          <ShowTables/>
        </Link>
      </Router>
    </div>
  );
}

export default App;
