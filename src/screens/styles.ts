import styled from 'styled-components';
import {MOBILE_BREAKPOINT} from '../utils';

export const Container = styled.div<{imgpath?: string}>`
  width: 100%;
  height: 100vh;
`;

export const LoaderContainer = styled.div<{imgpath?: string}>`
  display: flex;
  position: absolute;
  top: 0;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 100px;
  height: 100%;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 0 50px;
  }
`;

export const MovieInfoContainer = styled.div`
  max-width: 50ch;
  color: white;
  text-shadow: 7px 10px 20px rgba(23, 15, 61, 0.6);
`;

export const MovieTitle = styled.h1`
  font-size: 2.5rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 15px;
  border-radius: 10px;
`;

export const MovieDescription = styled.p`
  font-size: 1rem;
  background: rgba(0, 0, 0, 0.6);
  padding: 15px;
  border-radius: 10px;
`;

export const MovieYear = styled.p`
  font-size: 1rem;
  font-weight: 900;
`;

export const MoviePoster = styled.img`
  position: absolute;
  width: 690px;
  top: -100px;

  z-index: -2;
  transform: rotate(-15deg);
  overflow: hidden;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 360px;
    left: 0px;
  }
`;
