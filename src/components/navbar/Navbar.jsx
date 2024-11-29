import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar(){
    const [open,setOpen] = useState(false)

    const user = true;
    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                   <img src="logo2.png" alt="" />
                   <span>UrbanHaven</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
               {user ? (
                <div className="user">
                    <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="" />
                 <span>Sabbir hossen</span>
                 <Link to="/profile" className="profile">Profile</Link>
                </div>
               ) : (
                <>
                <a href="/">Sign in</a>
                <a href="/" className="register">
                  Sign up
                </a>
                </>
                )}

                <div className="menuIcon">
                    <img 
                    src="/menu.png"
                    alt="" 
                    onClick={() => setOpen((prev) => !prev)}
                    />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                    <a href="/">Sign in</a>
                    <a href="/">Sign up</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;