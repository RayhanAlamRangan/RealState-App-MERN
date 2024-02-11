




import { UseSelector  } from "react-redux/es/hooks/useSelector"
import { Outlet,Navigate  } from "react-router-dom"

const PrivateRoute = () => {


    const currentUser= UseSelector( (state) =>  state.user);
  return  currentUser? <Outlet/> : <Navigate to="/Sign-In" />;
    
  
}

export default PrivateRoute