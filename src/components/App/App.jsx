
import { Offline, Online } from 'react-detect-offline';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Booking from '../Booking/Booking';
import DashBoard from '../DashBoard/DashBoard';
import MasterLay from '../MasterLay/MasterLay';
import NotFound from '../NotFound/NotFound';
import '../../App.css';

function App() {
  
 const router= createBrowserRouter([{
  path:'/',
  element:<MasterLay/>,
  errorElement:<NotFound/>,
  children:[
    {index:true , element:<DashBoard/>},
    {path:'booking' , element:<Booking/>},
  ]
 }])


  
  return (
<>

<div>
<Online> <RouterProvider router={router}/></Online>
<Offline><div className="alert alert-danger fixed-bottom">
You are now offline, Please reconnect your internet again
  </div></Offline>
</div>

</>  
  );
}

export default App;
