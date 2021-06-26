import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../button/Button';
import Hamburger from '../Hamburger/Hamburger';

const HeaderWrapper = styled.div`
  background-color: #4d774e;
  margin-left: 200px;
  @media (max-width: 700px) {
    margin-left: 0;
  }
`;

const HeaderTag = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 50px;
  max-width: 1330px;
  margin: 0 auto;
  @media (max-width: 700px) {
    padding: 10px 25px;
  }
  @media (max-width: 845px) {
    font-size: 15px;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const ImageDiv = styled.div`
  width: 150px;
  @media (max-width: 700px) {
    width: 100px;
  }
  @media (max-width: 845px) {
    width: 100px;
  }
`;

// const Ul = styled.ul`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   list-style: none;
// `;

// const Li = styled.li`
//   margin: 5px 20px;
//   font-size: 20px;
//   cursor: pointer;
//   &:hover {
//     border-bottom: 1px solid black;
//   }
// `;

const Header = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('hello');
    window.addEventListener('resize', checkSize);
  }, []);
  //https://tech-career-alternative.firebaseapp.com/
  return (
    <HeaderWrapper>
      <HeaderTag>
        <ImageDiv>
          <a
            href='https://tech-career-alternative.firebaseapp.com/'
            target='_blank'
            rel='noreferrer'
          >
            <Image src='/frontfolio/images/tech-career-logo.png' />
          </a>
        </ImageDiv>
        {size > 460 ? (
          <a
            href='https://mail.google.com/mail/u/0/#all?compose=VpCqJWHtMZtRzqgPsvKBNVsHctcxQXrXnKCcLZBwgXCTnhwJLWFtxglXHWkqmfGtmmXxHNb'
            target='_blank'
            rel='noreferrer'
          >
            <Button color='bedge'>bayanayuda@gmail.com</Button>
          </a>
        ) : (
          <Hamburger />
        )}
      </HeaderTag>
    </HeaderWrapper>
  );
};

export default Header;
