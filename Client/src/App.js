import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home"
import AdminSystemPage  from "./pages/AdminSystemPage";
import AdminAssignRoles from './pages/AdminAssignRoles';
import Customer from './pages/Customer';
import ProductionManager from "./pages/ProductionManager";
import WorkStation1 from "./pages/WorkStation1";
import WorkStation2 from "./pages/WorkStation2";
import WorkStation3 from "./pages/WorkStation3";
import WorkStation4 from "./pages/WorkStation4";
import WorkStation5 from "./pages/WorkStation5";
import CustomerOrderlist from "./pages/CustomerOrderlist"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />,
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/adminsystem",
    element: <AdminSystemPage />
  },
  
  {
    path: "/adminassignrole",
    element: <AdminAssignRoles />,
  },
  {
    path:"/customer",
    element:<Customer/>
  },
  { 
    path:'/orderlist/:user',
    element:<CustomerOrderlist/>
  },
  {
    path:"/productionmanager",
    element:<ProductionManager/>
  },
  {
    path:"/op1",
    element:<WorkStation1/>
  }
  ,
  {
    path:"/op2",
    element:<WorkStation2/>
  }
  ,
  {
    path:"/op3",
    element:<WorkStation3/>
  }
  ,
  {
    path:"/op4",
    element:<WorkStation4/>
  }
  ,
  {
    path:"/op5",
    element:<WorkStation5/>
  }
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;