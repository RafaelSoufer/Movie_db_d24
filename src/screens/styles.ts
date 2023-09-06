import styled from 'styled-components';
import {IMAGES_BASE_URL} from '../api/API';

const BLUR_CONST = '8px';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 100px;
`;

export const BGImage = styled.div<{imgpath?: string}>`
  position: absolute;
  display: flex;
  background: ${props =>
    `url(${`${IMAGES_BASE_URL}${props.imgpath}`}) no-repeat center center`};
  background-size: cover;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  -webkit-filter: ${`blur(${BLUR_CONST})`};
  -moz-filter: ${`blur(${BLUR_CONST})`};
  -o-filter: ${`blur(${BLUR_CONST})`};
  -ms-filter: ${`blur(${BLUR_CONST})`};
  filter: ${`blur(${BLUR_CONST})`};
  -webkit-transform: scale(1.2, 1.2);
  -moz-transform: scale(1.2, 1.2);
  -o-transform: scale(1.2, 1.2);
  -ms-transform: scale(1.2, 1.2);
  transform: scale(1.2, 1.2);
`;

export const BGImageFilter = styled.div`
  width: 100%;
`;

export const MovieInfoContainer = styled.div`
  max-width: 50ch;
  color: white;
  text-shadow: 5px 4px 16px rgba(9, 22, 89, 0.3);
`;

export const MovieTitle = styled.h1`
  font-size: 2.5rem;
`;

export const MovieDescription = styled.p`
  font-size: 1rem;
`;
