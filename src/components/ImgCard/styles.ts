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
  max-width: 17ch;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 0.7rem;
    font-weight: 400;
    max-width: 14ch;
  }
`;

export const Text = styled.p`
  color: white;
  background: rgba(0, 0, 0, 0.6);
  padding: 8px;
  text-align: center;
  border-radius: 5px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
  }
`;
