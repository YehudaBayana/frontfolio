import styled from 'styled-components';
import '../../../index.css';

const GeneralButton = styled.button`
  padding: 10px 45px;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.background};
  transition: opacity 0.3s, transform 0.3s;
  color: ${(props) => props.color};
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.8;
    transform: scale(0.9);
  }
  @media (max-width: 845px) {
    font-size: 15px;
    padding: 5px 25px;
  }
`;

export default GeneralButton;
