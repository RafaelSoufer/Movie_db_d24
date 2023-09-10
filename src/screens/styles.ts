import styled from 'styled-components';
import {IMAGES_BASE_URL} from '../api/API';

const BLUR_CONST = '8px';

const BG_POSTER_FALLBACK =
  'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2139&q=80';

export const Container = styled.div<{imgpath?: string}>`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 100px;
  height: 100%;
`;

export const BGImage = styled.div<{imgpath: string | undefined}>`
  position: absolute;
  z-index: -999;
  display: flex;
  background: ${props =>
    `url( ${` ${
      props.imgpath
        ? `${IMAGES_BASE_URL}${props.imgpath}`
        : `${BG_POSTER_FALLBACK}`
    }   `}) no-repeat center center`};
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
