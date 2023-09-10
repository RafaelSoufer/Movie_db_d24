import styled from 'styled-components';
import {MOBILE_BREAKPOINT} from '../../utils';

export const Conatiner = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  right: 100px;
  top: 40px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    justify-content: center;
    right: 0;
    top: 30px;
    margin-bottom: 70px;
  }
`;

export const InputSearchConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconContainer = styled.div`
  position: relative;
  left: 55px;
`;

export const CloseContainer = styled.div`
  position: absolute;
  right: 20px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    position: absolute;
    top: -15px;
    right: 10%;
    height: 35px;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.8);
  }
`;

export const InputSearch = styled.input<{hasquery: string}>`
  padding: 40px;
  width: 80px;
  height: 80px;
  background: none;
  border: 4px solid white;
  border-radius: 50px;
  box-sizing: border-box;
  font-size: 26px;
  color: white;
  outline: none;
  transition: 0.5s;
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  ${InputSearchConatiner}:hover & {
    width: 350px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    padding-left: 60px;
  }
  ${props =>
    `${
      props.hasquery.length > 0 &&
      `width: 350px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    padding-left: 60px;`
    }`}
`;

export const SearchList = styled.ul`
  position: absolute;
  z-index: 99999;
  padding-inline-start: 0;
  top: 70px;
  color: white;
  list-style-type: none;
  max-height: 600px;
  width: 500px;
  overflow: auto;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.3);
  padding: 15px 0;
  li {
    cursor: pointer;
    text-decoration: none;
    padding: 5px 15px;
  }
  li:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    max-width: 400px;
    background: rgba(0, 0, 0, 0.9);
  }
`;
