import React from 'react';
import styled from 'styled-components';

const ImageWrraper = styled.div`
  width: calc(100%-200px);
  margin-left: 200px;
  height: 70vh;
  background-image: url(/frontfolio/images/barca-landscape.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: black;
    right: 0;
    top: 0;
    opacity: 0.5;
  }
  & p {
    max-width: 600px;
    margin: 10px auto;
    font-size: 20px;
    z-index: 1;
    color: white;
    text-align: center;
  }
  & h1 {
    color: white;
    z-index: 1;
    margin-bottom: 40px;
    margin-top: 148px;
  }
  @media (max-width: 700px) {
    margin-left: 0;
    padding: 10px;
    text-align: center;
    p {
      font-size: 15px;
    }
    h1 {
      font-size: 27px;
      margin-top: 80px;
    }
  }
`;

const CardsWrapper = styled.div`
  margin-left: 200px;
  @media (max-width: 700px) {
    margin-left: 0;
    padding: 20px;
  }
`;

const Card = styled.div`
  max-width: 900px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  box-shadow: 1px 1px 5px lightgray;
  padding: 20px;
  background-color: #f1b24a;
  color: white;
  text-align: left;
  & p {
    width: 50%;
    margin: 0 auto;
    font-size: 17px;
  }
  @media (max-width: 700px) {
    flex-flow: column wrap;
    p {
      width: 100%;
      font-size: 15px;
      margin: 19px 0;
    }
  }
`;

const ImgDiv = styled.div`
  width: 300px;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Home = () => {
  return (
    <>
      <ImageWrraper>
        <h1>yuda bayana presents</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed dolore
          cumque laboriosam dolor soluta excepturi facere consectetur ratione
          veritatis incidunt?
        </p>
      </ImageWrraper>
      <CardsWrapper>
        <Card>
          <ImgDiv>
            <img src='/frontfolio/images/point-up.jpg' alt='' width='100%' />
          </ImgDiv>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            sequi unde iure impedit omnis reiciendis maxime, architecto
            quibusdam aperiam obcaecati est animi rerum deserunt! Voluptatibus
            expedita recusandae praesentium laborum, eum qui facere ipsa?
          </p>
        </Card>
        <Card>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            sequi unde iure impedit omnis reiciendis maxime, architecto
            quibusdam aperiam obcaecati est animi rerum deserunt! Voluptatibus
            expedita recusandae praesentium laborum, eum qui facere ipsa?
          </p>
          <ImgDiv>
            <img src='/frontfolio/images/end-service.jpg' alt='' width='100%' />
          </ImgDiv>
        </Card>
        <Card>
          <ImgDiv>
            <img src='/frontfolio/images/presedent.jpg' alt='' width='100%' />
          </ImgDiv>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            sequi unde iure impedit omnis reiciendis maxime, architecto
            quibusdam aperiam obcaecati est animi rerum deserunt! Voluptatibus
            expedita recusandae praesentium laborum, eum qui facere ipsa?
          </p>
        </Card>
      </CardsWrapper>
    </>
  );
};

export default Home;
