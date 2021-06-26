import React from 'react';
import styled from 'styled-components';

const SkillsWrapper = styled.div`
  margin-left: 200px;
  display: flex;
  @media (max-width: 700px) {
    margin-left: 0;
    flex-direction: column;
  }
`;

const SkillsFront = styled.div`
  padding: 130px 30px;
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  & h2 {
    color: gray;
    margin-bottom: 25px;
    text-align: center;
  }
  & h4 {
    color: #164a41;
    text-align: center;
  }
  & ul {
    margin-left: 50px;
    color: #6c757d;
  }
  @media (max-width: 700px) {
    padding: 50px 20px;
    h2 {
      margin: 0 auto;
      margin-bottom: 25px;
    }
  }
`;
const SkillsBack = styled.div`
  padding: 30px;
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  &::before {
    position: absolute;
    content: '';
    width: 10px;
    height: 240px;
    left: -30px;
    top: 20%;
    background-color: #f1b24a;
  }
  & h2 {
    color: gray;
    margin-bottom: 25px;
    text-align: center;
  }
  & h4 {
    color: #164a41;
    text-align: center;
  }
  & ul {
    margin-left: 50px;
    color: #6c757d;
  }
  & span {
    font-size: 40px;
    color: #f1b24a;
  }
  @media (max-width: 700px) {
    padding: 50px 20px;
    &::before {
      position: absolute;
      content: '';
      height: 10px;
      width: 240px;
      left: 19%;
      top: 0;
      background-color: #f1b24a;
    }
    h2 {
      margin: 0 auto;
      margin-bottom: 25px;
    }
  }
`;
const H2 = styled.h2`
  margin: 50px 0;
  width: calc(100%-200px);
  margin-left: 200px;
  letter-spacing: 1.4rem;
  font-weight: 800;
  position: relative;
  text-align: center;
  &::before {
    position: absolute;
    content: '';
    width: 100px;
    height: 10px;
    left: 47%;
    top: 92px;
    background-color: #f1b24a;
  }
  @media (max-width: 700px) {
    margin-left: 0;
    font-size: 24px;
    letter-spacing: 1.2rem;
    &::before {
      height: 7px;
      left: 37%;
      top: 62px;
    }
  }
`;

const IconsWrapper = styled.div`
  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  & i {
    font-size: 50px;
    color: #f1b24a;
    margin: 20px 10px;
  }
`;

const OtherSkills = styled.div`
  margin-left: 200px;
  text-align: left;
  padding: 50px;
  display: flex;
  @media (max-width: 700px) {
    margin-left: 0;
    flex-direction: column-reverse;
    padding: 10px;
  }
  & p {
    padding: 10px;
  }
  h1 {
    padding: 10px;
    color: #6c757d;
  }
`;

const ImgOtherSkills = styled.div`
  width: 40%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const OtherSkillsText = styled.div`
  width: 66%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Skills = () => {
  return (
    <>
      <H2>MY SKILLS</H2>
      <SkillsWrapper>
        <SkillsFront>
          <h2>frontend skills</h2>
          <h4>CLIENT SIDE PROGRAMMING LANGUAGES</h4>
          <IconsWrapper>
            <i className='fab fa-react'></i>
            <i className='fab fa-js-square'></i>
            <i className='fab fa-html5'></i>
            <i className='fab fa-css3-alt'></i>
            <i className='fab fa-bootstrap'></i>
          </IconsWrapper>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>BOOTSTRAP</li>
            <li>JAVASCRIPT</li>
            <li>TYPESCRIPT</li>
            <li>REACT</li>
          </ul>
        </SkillsFront>
        <SkillsBack>
          <h2>backend skills</h2>
          <h4>SERVER SIDE PROGRAMMING LANGUAGES</h4>
          <IconsWrapper>
            <i className='fab fa-node'></i>
            <span>C</span>
            <i className='fas fa-hashtag'></i>
            <span>
              <strong>.NET</strong>
            </span>
            <i className='fas fa-database'></i>
          </IconsWrapper>
          <ul>
            <li>NODE-JS</li>
            <li>C#</li>
            <li>.NET ASP MVC</li>
            <li>MONGODB</li>
            <li>MYSQL</li>
          </ul>
        </SkillsBack>
      </SkillsWrapper>
      <OtherSkills>
        <OtherSkillsText>
          <h1>my other skills</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            libero itaque dolor, praesentium quaerat necessitatibus est vitae
            sunt, esse quos laboriosam repudiandae. Impedit libero corrupti qui!
            Sunt enim distinctio provident impedit molestias deleniti, veritatis
            dolorem maiores eos error natus minus iusto vitae recusandae.
          </p>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem sed
            odit velit eligendi laboriosam rerum at, quam, quisquam saepe vitae
            fuga itaque?
          </p>
        </OtherSkillsText>
        <ImgOtherSkills>
          <img src='/frontfolio/images/Prepares1.jpg' alt='' width='100%' />
        </ImgOtherSkills>
      </OtherSkills>
    </>
  );
};

export default Skills;
