import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { push } = useNavigate();
  const handleClick = () => {
    push("/login");
  };

  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default Home;
