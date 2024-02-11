
import {BrowserRouter,Routes,Route}from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/about'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Signout from './pages/Signout'
import SignUp from './pages/SignUp';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PrivateRoute from './Components/PrivateRoute';
const App = () => {
  return (
 

<BrowserRouter>
<Header/>
<Routes>
<Route path="/"   element={<Home/>}/>
  <Route path="/about"   element={<About/>}/>
  <Route path="/Sign-Up"   element={<SignUp/>}/>
  <Route path="/Sign-In"   element={<Signin/>}/>
  <Route path="/Sign-Out"   element={<Signout/>}/>
  
  <Route element={<PrivateRoute/>}>
  <Route path="/profile"   element={<Profile/>}/>
  </Route>
</Routes>
<Footer/>
</BrowserRouter>

   
  )
}

export default App