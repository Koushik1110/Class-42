import { useState } from "react";

const HOC = ({ children, authStatus }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (authStatus) {
    setIsLoggedIn(true);
    return children;
  } else {
    return <p>You are not logged in!</p>;
  }
};

export default HOC;
