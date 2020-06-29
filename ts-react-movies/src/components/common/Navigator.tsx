import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavItem = styled.nav`
  border-bottom: 0.1rem solid dimgray;
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
    padding: 1rem 4.4rem;
    cursor: pointer;

    a {
      font-size: 2.15rem;
      display: block;
      text-decoration: none;
      color: #bb86fc;
      &:hover {
        color: rgba(255, 255, 255, 0.9);
      }
    }
  }
`;

interface NavigatorProps {}
const Navigator: React.FC<NavigatorProps> = (props) => {
  return (
    <NavItem>
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={{ color: "white" }}>
            홈페이지
          </NavLink>
        </li>
        <li>
          <NavLink to="/boxoffice" activeStyle={{ color: "white" }}>
            박스오피스
          </NavLink>
        </li>
        <li>
          <NavLink to="/movie" activeStyle={{ color: "white" }}>
            영화정보
          </NavLink>
        </li>
      </ul>
    </NavItem>
  );
};

export default Navigator;
