
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Setting from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import {
  BrowserRouter as Router,
  HashRouter,
  Routes, //instead of swtich
  Route,
  Link
} from 'react-router-dom';
import { useContext } from "react";
import { Context } from "./context/Context"

function App() {

 const { user } = useContext(Context);

  return (
    <HashRouter>
      <NavBar />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/register" element={user ? <Home /> : <Register />} />
      <Route path="/login" element={user ? <Home /> : <Login />} />
      <Route path="/write" element={user ? <Write /> : <Login />} />
      <Route path="/settings" element={user ? <Setting /> : <Login />} />
      <Route path="/post/:postId" element={<Single />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>    
  );
}

export default App;
