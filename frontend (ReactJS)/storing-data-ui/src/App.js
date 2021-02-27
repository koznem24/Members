import './App.css';
import MainWindow from './components/MainWindow';
import ListOfMembers from './components/ListOfMembers';
import AddMember from './components/AddMember';

import {Route, BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <Router>
    
      <div className="App">
         <Route path='/' exact component={MainWindow}/>
         <Route path='/addMember' component={AddMember}/>
         <Route path='/listOfMembers' component={ListOfMembers}/>
      </div>
         
    </Router>
  );
}
export default App;
