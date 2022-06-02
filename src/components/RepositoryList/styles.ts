import styled from "styled-components";
import { GOLD, BLACK, BLACK_SECOND } from '../../constants/colors';

export const Container = styled.div``;

export const Repository = styled.div`
  padding-bottom: 15px;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
`;

export const Link = styled.a`
  font-size: 24px;
  text-transform: capitalize;
  font-weight: bold;
  text-decoration: none;
  color: ${GOLD};
`;

export const FavButton = styled.button`
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
`;

export const Description = styled.p`
  padding-bottom: 5px;
`;

export const Stars = styled.div`
  display: flex;
  align-items: self-end;
  font-size: 18px;
  color: ${BLACK_SECOND};
  font-weight: 500;

  &::before {
    display: inline-block;
    content: '☆';
    font-size: 24px;
    font-weight: 100;
    padding-right: 5px;
    color: ${BLACK};
  }
`;
