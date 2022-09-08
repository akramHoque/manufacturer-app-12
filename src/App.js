import { Route, Routes } from 'react-router-dom';
import './App.css';
// toast
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home' 
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Components/SignUp/SignUp';
import Login from './Login/Login';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Components/Dashborad/Dashboard';
import RequireAuth from './Components/RequireAuth/RequireAuth'
import MyProfile from './Components/Dashborad/MyProfile';
import AddReview from './Components/Dashborad/AddReview';
import PurchaseProduct from './Components/Purchase/PurchaseProduct';
import MyOrder from './Components/Dashborad/MyOrder';
import MyPortfolio from './Components/MyPortfolio/MyPortfolio';



function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/myPortfolio" element={<MyPortfolio/>}></Route>

        <Route
          path="/purchase-product/:id"
          element={
            <RequireAuth>
              <PurchaseProduct />
            </RequireAuth>
          }
        ></Route>




        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
<Route path="myProfile" element={<MyProfile />}></Route>
<Route path="myOrders" element={<MyOrder />}></Route>
<Route path="addReview" element={<AddReview />}></Route>
          </Route>

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
