import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavItem = styled.nav`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
  ul {
    display: flex;
    justify-content: space-between;
    width: 85rem;
    margin-top: 2rem;
    font-size: 1.6rem;
    font-weight: bold;
    list-style: none;
  }
  li {
    margin-right: 2rem;
    padding: 1.2rem 4.4rem;
    border-bottom: 0.6rem solid rgba(14, 14, 14, 0);
    cursor: pointer;
    &:hover {
      border-bottom: 0.4rem solid rgba(255, 255, 255, 0.6);
    }
    a {
      font-size: 2rem;
      display: block;
      text-decoration: none;
      color: #fff;
    }
  }
`;

interface NavigatorProps {}
const Navigator: React.FC<NavigatorProps> = (props) => {
  return (
    <NavItem>
      <ul>
        <li>
          <NavLink to="/">메인</NavLink>
        </li>
        <li>
          <NavLink to="/boxoffice">박스오피스</NavLink>
        </li>
        <li>
          <NavLink to="/movie">영화정보</NavLink>
        </li>
        <li>
          <NavLink to="/cast">영화인</NavLink>
        </li>
      </ul>
    </NavItem>
  );
};

export default Navigator;
