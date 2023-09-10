import styled from 'styled-components';
import {IMAGES_BASE_URL} from '../../api/API';

const BLUR_CONST = '8px';

const BG_POSTER_FALLBACK =
  'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2139&q=80';

export const StyledBGImage = styled.div<{imgpath: string | undefined}>`
  position: absolute;
  z-index: -999;
  display: flex;
  background: ${props =>
    `
    linear-gradient(to bottom, rgba(245, 246, 252, 0.3) 0%, rgba(117, 19, 93, 0.3) 25%, rgba(117, 19, 93, 0.4) 50%, rgba(255, 255, 255, 1) 100%),
    url( ${` ${
      props.imgpath
        ? `${IMAGES_BASE_URL}${props.imgpath}`
        : `${BG_POSTER_FALLBACK}`
    }   `}) no-repeat center center`};
  background-size: cover;
  overflow: hidden;
  width: 100%;
  height: 100%;
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
