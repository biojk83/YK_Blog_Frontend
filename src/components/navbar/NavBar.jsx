import React from "react"
import "./navbar.css"
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { Context } from "../../context/Context";

function NavBar () {
  const { user, dispatch } = useContext(Context);
  const PF = "https://yk-blog-backend.onrender.com/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT"})
  };

    return (
        <div className="top">
          <div className="leftbar">
            <div className="logo"><b>S</b>hooting<b>S</b>tar</div>
          </div>    
          <div className="centerbar">
            <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/"> HOME </Link>
                </li>
                <li className="topListItem"><Link className="link" to="/about"> ABOUT </Link></li>
                <li className="topListItem"><Link className="link" to="/contact"> CONTACT </Link></li>
                <li className="topListItem"><Link className="link" to="/write"> WRITE </Link></li>
                <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
            </ul>
          </div>    
          <div className="rightbar">
            {
              user ? (
                <Link to="/settings">  
                  <img className="topImage" src={ user.profilePic === "" ? PF+"blankUser.png" : PF+user.profilePic } alt="" />
                </Link>
                ) : (
                <ul className="topList">
                  <li className="topListItem">
                     <Link className="link" to="/login">LOGIN</Link>
                  </li>
                  <li className="topListItem">
                     <Link className="link" to="/register">REGISTER</Link>
                  </li>
                </ul>
              )
              }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>    
        </div>
    )
}

export default NavBar