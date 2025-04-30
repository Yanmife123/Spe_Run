import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { IoMenuOutline } from "react-icons/io5";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../../lib/supabase";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (!error) setUser(user);
    };

    fetchUser();
    const { data: authListener } = supabase.auth.onAuthStateChange(() => {
      fetchUser(); // re-fetch user on login/logout
    });

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate("/login");
  };

  return (
    <div>
      <nav>
        <img src={assets.logo3} alt="Logo" />
        <input type="checkbox" id="check" />
        <ul>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/team"}>Team Members</Link>
          </li>
          <li>
            <Link to={"/events"}>Events</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>

          <div className="nav-right-section">
            {user ? (
              <>
                <Link to={"/profile"}>
                  <div className="nav-avatar">
                    <img
                      src={`https://api.dicebear.com/6.x/initials/svg?seed=${
                        user.user_metadata?.full_name || "U"
                      }`}
                      alt="avatar"
                      className="avatar"
                    />
                  </div>
                </Link>
                <button className="button-2" onClick={handleSignOut}>
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link to={"/register"}>
                  <button className="button-1">Sign Up</button>
                </Link>
                <Link to={"/login"}>
                  <button className="button-2">Login</button>
                </Link>
              </>
            )}
          </div>
        </ul>

        <div id="desktop-nav-actions">
          <div className="nav-right-section-b">
            {user ? (
              <>
                <Link to={"/profile"}>
                  <div className="nav-avatar">
                    <img
                      src={`https://api.dicebear.com/6.x/initials/svg?seed=${
                        user.user_metadata?.full_name || "U"
                      }`}
                      alt="avatar"
                      className="avatar"
                    />
                  </div>
                </Link>
                <button className="button-2" onClick={handleSignOut}>
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link to={"/register"}>
                  <button className="button-1">Sign Up</button>
                </Link>
                <Link to={"/login"}>
                  <button className="button-2">Login</button>
                </Link>
              </>
            )}
          </div>
          <label htmlFor="check" id="check-btn">
            <IoMenuOutline className="menuBtn" />
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
