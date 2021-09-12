import './App.css';
import Heading from './components/Heading'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
   <div className="h-screen text-white text-center p-10">
     <div className="container mx-auto h-full">
     <Heading/>
   
   <Switch>
     <Route path="/" component={TaskList} exact/>
     <Route path="/form" component={TaskForm}/>
   </Switch>
     </div>
   </div>
     
    </div>
  );
}

export default App;
