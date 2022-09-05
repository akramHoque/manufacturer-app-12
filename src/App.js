import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Components/SignUp/SignUp';
import Login from './Login/Login';
import RequireAuth from '../src/Components/RequireAuth/RequireAuth';
import Purchase from './Components/Purchase/Purchase';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path="/order/:orderId" element={<RequireAuth><Purchase /></RequireAuth>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
