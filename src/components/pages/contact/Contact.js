import React from 'react';
import styled, { css } from 'styled-components';
import { ForMarginL } from '../portfolio/Portfolio';

const ContactDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 55px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 0px;
  }
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid gray;
  &:focus {
    outline: none;
  }
  ${(props) => {
    return props.half
      ? css`
          width: 49%;
        `
      : null;
  }}
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 45px 15px;
  background-color: white;
`;

const H2 = styled.h2`
  width: 100%;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid gray;
  font-size: 20px;
  margin: 10px 0;
  &:focus {
    outline: none;
  }
`;

const Content = styled.div`
  background-color: #f1b24a;
  color: black;
  padding: 45px 23px;
`;

const InputDiv = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export const Button = styled.button`
  border: none;
  border-radius: 6px;
  padding: 7px 35px;
  font-size: 16px;
  font-weight: 800;
  background-color: #f1b24a;
  color: black;
  box-shadow: 1px 1px 15px lightgray;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  ${(props) => {
    return props.pink
      ? css`
          background-color: hsl(322, 100%, 66%);
          color: white;
          font-size: 13px;
          padding: 14px 65px;
        `
      : null;
  }}
`;

const P = styled.p`
  margin: 10px 0;
  margin-bottom: 50px;
  line-height: 1.7rem;
`;

const Span = styled.span`
  font-size: 18px;
  display: inline-block;
  text-align: left;
  margin-top: 10px;
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

const Contact = () => {
  return (
    <ForMarginL style={{ backgroundColor: '#f1f1f1' }}>
      <div className='container'>
        <ContactDiv>
          <Content>
            <h2>get in touch</h2>
            <P>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis.
            </P>
            <Span>
              <i class='fas fa-map-marker-alt'></i>
              Lorem ipsum dolor sit amet.
            </Span>
            <br />
            <Span>
              <i class='fas fa-phone-square-alt'></i>
              054-345-3426
            </Span>
            <br />
            <Span>
              <i class='fas fa-paper-plane'></i>
              example@example.com
            </Span>
            <br />
            <Span>
              <i class='fas fa-globe-americas'></i>
              yudaBayana.com
            </Span>
          </Content>
          <Form
            action='https://formsubmit.co/324c7560ffd4fbb04171fd59b7bec95b'
            method='POST'
          >
            <H2>Contact me</H2>
            <InputDiv>
              <label>first name</label>
              <Input type='text' name='firstName' placeholder='first name' />
            </InputDiv>
            <InputDiv>
              <label>last name</label>
              <Input type='text' name='lastName' placeholder='last name' />
            </InputDiv>
            <label>email</label>
            <Input
              type='email'
              name='email'
              placeholder='example@example.com'
            />
            <label>leave a message</label>
            <Textarea name='message' placeholder='message'></Textarea>
            <button>
              <Button type='submit'>send </Button>
            </button>
          </Form>
        </ContactDiv>
      </div>
    </ForMarginL>
  );
};

export default Contact;
