import styled from "styled-components";
import { WHITE, GOLD, GREY } from '../../constants/colors';

export const Container = styled.div`
  padding: 20px 5px;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  background: ${WHITE};
  margin-bottom: 20px;

  @media screen and (max-width: 590px) {
    flex-direction: column;
    height: 100px;
  }
`;

export const Title = styled.div`
  font-size: 36px;
  margin-right: 10px;
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 340px;

  @media screen and (max-width: 590px) {
    flex-direction: column;
    align-items: flex-start;
    height: 55px;
  }
`;

export const RadioButton = styled.span`
  height: 18px;
  width: 18px;
  display: inline-block;
  border-radius: 30px;
  border: 1px solid ${GOLD};
  position: relative;
`;

export const Select = styled.select`
  width: 180px;
  height: 25px;
  border-radius: 5px;
  border-color: ${GREY};
  font-size: 15px;
`;

export const Option = styled.option``;

export const FavoritesFilter = styled.div<{
  checked?: boolean;
}>`
  display: flex;
  width: 115px;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  cursor: pointer;

  ${RadioButton}::after {
    display: inline-block;
    position: absolute;
    content: '';
    border-radius: 30px;
    top: 2px;
    right: 2px;
    height: 14px;
    width: 14px;
    ${({ checked }) => checked && `background-color: ${GOLD};`}
  }
`;
