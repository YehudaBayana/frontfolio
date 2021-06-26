import React from 'react';
import Cards from '../../features/cards/Cards';
import styled from 'styled-components';

export const ForMarginL = styled.div`
  margin-left: 200px;
  padding: 20px 50px;
  @media (max-width: 700px) {
    margin-left: 0;
    padding: 10px 0px;
  }
`;

const Container = styled.div`
  max-width: 1330px;
  margin: 0 auto;
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const P = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 50px auto;
  padding: 0 10px;
`;

const H2 = styled.h2`
  margin: 30px 0;
  text-align: center;
`;

const Portfolio = () => {
  return (
    <ForMarginL>
      <Container>
        <H2>Portfolio</H2>
        <P>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          placeat repellendus cupiditate dignissimos repudiandae inventore!
        </P>
        <CardsWrapper>
          <Cards />
        </CardsWrapper>
      </Container>
    </ForMarginL>
  );
};

export default Portfolio;
