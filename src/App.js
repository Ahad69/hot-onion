import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import BrstFood from './Pages/Home/Food/Breakfast/BrstFoods/BrstFood';
import SingleFood from './Pages/Home/Food/Breakfast/SingleFood/SingleFood';
import DinFoods from './Pages/Home/Food/Dinner/DinFoods/DinFoods';
import LunFoods from './Pages/Home/Food/Lunch/LunFoods/LunFoods';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
   
    <div className="App">
    <Router>
      <Header></Header>
      <Home></Home>
      <Switch>
        <Route path="/breakfast">
          <BrstFood></BrstFood>
        </Route>
        <Route path="/dinner">
        <DinFoods></DinFoods>
        </Route>
        <Route exact path={["/", "/lunch"]}>
        <LunFoods></LunFoods>
        </Route>
        <Route path="/foods/:id">
         <SingleFood></SingleFood>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
