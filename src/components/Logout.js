import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { push } = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    localStorage.removeItem("token");
    push("/login");
  }, []);

  return <div></div>;
};

export default Logout;
