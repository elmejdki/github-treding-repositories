import styled, { css } from 'styled-components';

const SIZING = css`
  max-width: 1400px;
  margin: 0 30px;

  @media screen and (min-width: 1400px) {
    margin: 0 auto;
  }
`;

export const Header = styled.header`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  padding: 50px 5px;
  color: #424242;

  ${SIZING}
`;

export const Main = styled.main`
  ${SIZING}
`;

export const Footer = styled.footer`
  font-weight: bold;
  text-align: center;
  padding: 20px;
  color: #a1a1a1;

  ${SIZING}
`;
