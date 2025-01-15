import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Community = () => {
  const user = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h2>Coumutiy page: user</h2>
    </div>
  );
};

export default Community;
