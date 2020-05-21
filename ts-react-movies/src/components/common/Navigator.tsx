import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavItem = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  background-color: #d50000;
  ul {
    display: flex;
    justify-content: space-between;
    width: 40rem;
    color: #fff;
    font-size: 1.25rem;
    font-weight: bold;
  }
  li {
    padding: 0.9rem 0.9rem;
    border-bottom: 2rem solid #ff5131;
    cursor: pointer;
    &:hover {
      border-bottom: 2rem solid #9b0000;
    }
  }
`;

const Navigator: React.FC = (props) => {
  return (
    <NavItem>
      <ul>
        <li>
          <Link to="/">메인</Link>
        </li>
        <li>
          <Link to="/boxoffice">박스오피스</Link>
        </li>
        <li>
          <Link to="/movie">영화정보</Link>
        </li>
        <li>
          <Link to="/people">영화인</Link>
        </li>
      </ul>
    </NavItem>
  );
};

export default Navigator;
