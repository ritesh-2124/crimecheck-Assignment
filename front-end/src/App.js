import './App.css';
import {Routes ,  Route} from "react-router-dom"
import Login from './Components/Login/Login';
import Feed from './Components/FeedPage/Feed';
import Ragister from './Components/Ragister/Ragister';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/feed' element={<Feed/>} />
      <Route path='/Ragister' element={<Ragister/>} />
      </Routes>
    </div>
  );
}

export default App;