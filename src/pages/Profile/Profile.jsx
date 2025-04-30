import React, { useEffect, useState } from "react";
import "./Profile.css";
import supabase from "../../lib/supabase";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) {
        // Redirect to login if user is not found
        navigate("/login");
      } else {
        setUser(user);
      }
    };

    getUser();
  }, [navigate]);

  return (
    <div className="profile-container">
      <div className="profile-card">
        {user ? (
          <>
            <img
              src={`https://api.dicebear.com/6.x/initials/svg?seed=${
                user.user_metadata?.full_name || "User"
              }`}
              alt="User Avatar"
              className="profile-avatar"
            />
            <h2>{user.user_metadata?.full_name || "Guest User"}</h2>
            <p>Email: {user.email}</p>
            <p>SPE ID: {user.user_metadata?.speID || "N/A"}</p>
          </>
        ) : (
          <p>Loading user info...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
