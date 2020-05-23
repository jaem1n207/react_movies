import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavItem = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.4rem;
  background-color: #ff4e50;
  ul {
    display: flex;
    justify-content: space-between;
    width: 40rem;
    margin-top: 2rem;
    color: #fff;
    font-size: 1.4rem;
    font-weight: bold;
    list-style: none;
  }
  li {
    padding: 0.4rem 0.4rem;
    border-bottom: 1rem solid #ff4e50;
    cursor: pointer;
    &:hover {
      border-bottom: 0.4rem solid #9b0000;
    }
    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;

const Navigator: React.FC = (props) => {
  return (
    <NavItem>
      <ul>
        <li>
          <NavLink exact to="/">
            메인
          </NavLink>
        </li>
        <li>
          <NavLink to="/boxoffice">박스오피스</NavLink>
        </li>
        <li>
          <NavLink to="/movie">영화정보</NavLink>
        </li>
        <li>
          <NavLink to="/people">영화인</NavLink>
        </li>
      </ul>
    </NavItem>
  );
};

export default Navigator;
