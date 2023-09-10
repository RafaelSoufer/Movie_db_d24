import styled from 'styled-components';
import {MOBILE_BREAKPOINT} from '../../utils';

export const Conatiner = styled.div`
  margin-top: 30px;
  max-width: 20ch;
`;

export const CardImg = styled.img`
  height: 230px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    height: 150px;
  }
`;

export const Content = styled.div`
  color: white;
  font-size: 0.9rem;
  font-weight: 400;
`;
