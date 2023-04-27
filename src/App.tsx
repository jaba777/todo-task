import {Routes,Route} from 'react-router-dom';
import Index from "./Pages/Index";
import SignIn from './Pages/SignIn';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
      
    </>
  );
}

export default App;
