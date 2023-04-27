import {Routes,Route} from 'react-router-dom';
import Index from "./Pages/Index";
import SignIn from './Pages/SignIn';
import Profile from './Pages/Profile';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<div>error</div>} />
      </Routes>
      
    </>
  );
}

export default App;
