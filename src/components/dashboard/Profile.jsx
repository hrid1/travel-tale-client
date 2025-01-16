import React from "react";

const Profile = () => {
  const userRole = "admin";
  return (
    <div>
      {userRole === "admin" && <h2>Admin Profile</h2>}
      {userRole === "tourist" && <h2>Tourist Profile</h2>}
      {userRole === "guide" && <h2>Guide Profile</h2>}
    </div>
  );
};

export default Profile;
