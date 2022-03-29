import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../Login/firebase";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
  
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  if (user) {
    return (
      <>
        <Nav>
          <NavMenu>
            <NavLink to="/">
              Home
            </NavLink>
            <NavLink to="/createproject">
              Create Project
            </NavLink>
            <NavLink to="/projects">
              Projects
            </NavLink>
            <NavLink to="/Updates">
              Updates
            </NavLink>
            <NavLink to="/settings">
              Settings
            </NavLink>
            <NavLink to="/dashboard">
              Dashboard
            </NavLink>
          </NavMenu>
        </Nav>
      </>
    );
  }
  else {
    return (
      <>
        <Nav>
          <NavMenu>
            <NavLink to="/">
              Home
            </NavLink>
            <NavLink to="/createproject">
              Create Project
            </NavLink>
            <NavLink to="/projects">
              Projects
            </NavLink>
            <NavLink to="/Updates">
              Updates
            </NavLink>
            <NavLink to="/settings">
              Settings
            </NavLink>
            <NavLink to="/login">
              Login
            </NavLink>
            <NavLink to="/register">
              Register
            </NavLink>
          </NavMenu>
        </Nav>
      </>
    );
  }


  
};
  
export default Navbar;