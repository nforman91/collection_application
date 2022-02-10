import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <StyledNav>
      <Link to="/">Home</Link>
      {isLoggedIn ? <Link to="/collections">Collections</Link> : ""}
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      {isLoggedIn ? <Link to="/logout">Logout</Link> : ""}
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  height: 2rem;
  width: 100%;
  padding: 1rem;
  border: 1px solid black;
`;

export default Header;
