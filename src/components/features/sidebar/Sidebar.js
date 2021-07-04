import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SidebarMenu = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #164a41;
  position: fixed;
  height: 100%;
  bottom: 0;
  overflow: auto;
  @media (max-width: 700px) {
    display: none;
  }
  & a:nth-child(1) {
    margin-top: 120px;
  }
  & a {
    display: block;
    color: white;
    padding: 16px;
    text-decoration: none;
    &:hover:not(.active) {
      background-color: #4d774e;
      color: white;
    }
    &.active {
      background-color: #f1b24a;
      color: black;
    }
  }
`;
const Sidebar = () => {
  const [forReRender, setForReRender] = useState('.');
  let homeClassName =
    document.location.href.indexOf('/home') > -1 ? 'active' : '';
  let skillsClassName =
    document.location.href.indexOf('/skills') > -1 ? 'active' : '';
  let portfolioClassName =
    document.location.href.indexOf('/portfolio') > -1 ? 'active' : '';
  let contactClassName =
    document.location.href.indexOf('/contact') > -1 ? 'active' : '';

  function forReRenderFunc() {
    setForReRender((oldValue) => (oldValue === '.' ? ',' : '.'));
  }

  useEffect(() => {
    forReRenderFunc();
  }, []);

  return (
    <SidebarMenu>
      <Link onClick={forReRenderFunc} className={homeClassName} to='/home'>
        Home
      </Link>
      <Link onClick={forReRenderFunc} className={skillsClassName} to='/skills'>
        Skills
      </Link>
      <Link
        onClick={forReRenderFunc}
        className={portfolioClassName}
        to='/portfolio'
      >
        Portfolio
      </Link>
      <Link
        onClick={forReRenderFunc}
        className={contactClassName}
        to='/contact'
      >
        Contact
      </Link>
      {forReRender}
    </SidebarMenu>
  );
};

export default Sidebar;
