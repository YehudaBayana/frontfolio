import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterBasic = styled.div`
  padding: 20px 0;
  margin-left: 200px;
  background-color: #164a41;
  color: white;
  border-top: 1px solid #f1f1f1;
  margin-bottom: 0;
  @media (max-width: 700px) {
    margin-left: 0;
  }
`;

const Social = styled.div`
  text-align: center;
  padding-bottom: 15px;
  & > a {
    font-size: 18px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    border: 1px solid #ccc;
    margin: 0 8px;
    color: inherit;
    opacity: 0.75;
    &:hover {
      opacity: 0.9;
    }
  }
`;

const ListInline = styled.ul`
  padding: 0;
  list-style: none;
  text-align: center;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  & a {
    color: inherit;
    text-decoration: none;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
  @media (max-width: 430px) {
    flex-flow: column wrap;
  }
`;

const ListInlineItem = styled.li`
  padding: 0 10px;
`;

const CopyRight = styled.p`
  margin-top: 7px;
  text-align: center;
  font-size: 13px;
  color: #dbdb45;
  margin-bottom: 0;
`;

const Footer = () => {
  return (
    <FooterBasic>
      <footer>
        <Social>
          <a
            href='https://www.linkedin.com/in/yehuda-bayana'
            target='_blank'
            rel='noreferrer'
          >
            <i class='icon ion-social-linkedin'></i>
          </a>
          <a
            href='https://github.com/YehudaBayana/frontfolio.git'
            target='_blank'
            rel='noreferrer'
          >
            <i class='icon ion-social-github'></i>
          </a>
          <a
            href='https://twitter.com/Yehudabayana2'
            target='_blank'
            rel='noreferrer'
          >
            <i class='icon ion-social-twitter'></i>
          </a>
        </Social>
        <ListInline>
          <ListInlineItem>
            <Link to='/home'>Home</Link>
          </ListInlineItem>
          <ListInlineItem>
            <Link to='/skills'>Skills</Link>
          </ListInlineItem>
          <ListInlineItem>
            <Link to='/portfolio'>Portfolio</Link>
          </ListInlineItem>
          <ListInlineItem>
            <Link to='/contact'>Contact</Link>
          </ListInlineItem>
        </ListInline>
        <CopyRight>Yuda Bayana &copy; 2021</CopyRight>
      </footer>
    </FooterBasic>
  );
};

export default Footer;
