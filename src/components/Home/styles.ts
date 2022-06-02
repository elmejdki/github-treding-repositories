import styled, { css } from 'styled-components';
import { BLACK_SECOND, GREY } from '../../constants/colors';

const SIZING = css`
  max-width: 1100px;
  margin: 0 30px;

  @media screen and (min-width: 1100px) {
    margin: 0 auto;
  }
`;

export const Header = styled.header`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  padding: 50px 5px;
  color: ${BLACK_SECOND};

  ${SIZING}
`;

export const Main = styled.main`
  ${SIZING}
`;

export const Footer = styled.footer`
  font-weight: bold;
  text-align: center;
  padding: 20px;
  color: ${GREY};

  ${SIZING}
`;
