import { Route, Routes } from 'react-router-dom';
import './App.css';
// toast
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Components/SignUp/SignUp';
import Login from './Login/Login';
import RequireAuth from '../src/Components/RequireAuth/RequireAuth';
import Purchase from './Components/Purchase/Purchase';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import MyPortfolio from './Components/MyPortfolio/MyPortfolio';
import Dashboard from './Components/Dashborad/Dashboard';
import RequireAdmin from './Components/RequireAdmin';
import MyProfile from './Components/Dashborad/MyProfile';
import MyOrder from './Components/Dashborad/MyOrder';
import AddReview from './Components/Dashborad/AddReview';
import ManageProduct from './Components/ManageProduct';
import MakeAdmin from './Components/Dashborad/MakeAdmin';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path="/order/:orderId" element={<RequireAuth><Purchase /></RequireAuth>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/profile" element={<MyProfile />}></Route>
        <Route path="/portfolio" element={<MyPortfolio />}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
        <Route path="/dashboard" element={<RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
        <Route index element={<MyProfile />}></Route>
        <Route path="order" element={<RequireAuth><MyOrder/></RequireAuth>}></Route>
        <Route path="review" element={<RequireAuth><AddReview/></RequireAuth>}></Route>
        <Route path="users" element={<MakeAdmin/>}></Route>
        <Route path="manage-product" element={<RequireAdmin><ManageProduct/></RequireAdmin>}></Route>

        </Route>
      </Routes>

    
      <ToastContainer />
    </div>
  );
}

export default App;
