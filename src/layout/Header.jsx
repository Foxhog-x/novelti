import React from 'react'
import styled from "styled-components";
import { Link} from "react-router-dom";
export const Header = () => {
    const NAV = styled.div`
    background-color: gray;
    display: flex;
    align-items: center;
    height: 60px;
    justify-content: flex-start;
    gap: 30px;
    padding: 0px 30px 0px 30px;
  `;
  
  const LOGO = styled.h1`
    text-align: left;
  
  `;
  return (
      <NAV>
    <LOGO>OP LOGO</LOGO>
    <Link style={{textDecoration: 'none'}} to="/">Home</Link>
    <Link style={{textDecoration: 'none'}} to="/user">User</Link>
  </NAV> 
  )
}
