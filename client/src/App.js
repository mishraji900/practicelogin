
import Login from './component/Login';
import Signup from './component/Signup';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import axios from 'axios';
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from './context/userContext';
import Home from './component/Home';
axios.defaults.baseURL='http://localhost:8000/'
axios.defaults.withCredentials=true

function App() {
  return (
    <UserContextProvider className="App">
      <Toaster
      position='bottom-right'
      toastOptions={{duration:3000}}
      >

      </Toaster>
      <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
