import styled from 'styled-components';

export const TABLET_BREAKPOINT = '1230px';
export const MOBILE_BREAKPOINT = '660px';

export const HeaderContainer = styled.div`
z-index: 99;
  height: 60px;
  z-index: 10;
  width: 100%;
  position: sticky;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 0px;
  background: rgba(255,255,255, 0.3);
  border-bottom: 1px solid white;
`;


export const HeaderContent = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px 0 50px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    margin: 0 10px 0 70px;
    justify-content: initial;
    & > *:first-child {
      justify-self: flex-end;
    }
  }
`;

export const LogoContainer = styled.div`
  padding-bottom: 3px;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 0 10px;
  }
`;

export const Logo = styled.img`
  position: relative;
  height: 24px;
  cursor: pointer;
`;

export const ErrorContainer = styled.div`
  height: 18px;
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: left;
  position: absolute;
  top: 100%;
  margin-top: 0px;

  @media (min-width: 500px) {
    margin-top: 0px;
  }
  @media (max-width: ${TABLET_BREAKPOINT}) {
    top: 76%;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    top: 90%;
  }
`;












