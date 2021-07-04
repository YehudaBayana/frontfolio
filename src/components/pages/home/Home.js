import React from 'react';
import styled from 'styled-components';

const ImageWrraper = styled.div`
  width: calc(100%-200px);
  margin-left: 200px;
  height: 70vh;
  background-image: url(/frontfolio/images/barca-landscape.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
    opacity: 0.6;
  }
  & p {
    max-width: 600px;
    margin: 10px auto;
    font-size: 18px;
    z-index: 1;
    color: white;
    text-align: center;
  }
  & h1 {
    color: white;
    z-index: 1;
    margin-bottom: 20px;
    margin-top: 148px;
  }
  & h3 {
    color: #f1b24a;
    font-weight: 700;
    z-index: 1;
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
  @media (max-width: 1155px) {
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
    color: black;
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
        <h3>web developer</h3>
        <p>
          Has experience in professional positions that required the ability to
          work independently and in a team, the ability to self-study and
          multiple investment. Has a high work ethic, a high sense of service
          and interpersonal communication.
        </p>
      </ImageWrraper>
      <CardsWrapper>
        <Card>
          <ImgDiv>
            <img src='/frontfolio/images/point-up.jpg' alt='' width='100%' />
          </ImgDiv>
          <p>
            Here I am giving a lesson to my classmates about react hooks, in
            this particular picture I tetched about useRef hook. useRef is
            basically a hook that alow you to access to every single element
            in........to be continued.... it was fun to give that lesson and be
            able to teach someone new stuff
          </p>
        </Card>
        <Card>
          <p>
            Here it's a picture of the National Service graduation certificate
            controversy. I did national service at the National Road Safety
            Authority, a kind of Knesset for the Road Guards Center. The job of
            the service members, to be in touch with the volunteers, to analyze
            the information, a kind of operational cyber.
          </p>
          <ImgDiv>
            <img src='/frontfolio/images/end-service.jpg' alt='' width='100%' />
          </ImgDiv>
        </Card>
        <Card>
          <ImgDiv>
            <img src='/frontfolio/images/barzik.jpg' alt='' width='100%' />
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
