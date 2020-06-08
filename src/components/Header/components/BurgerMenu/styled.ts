import styled from 'styled-components';

export const StyledBurgerMenu = styled.button`
  // reset
  padding: 0;
  background: none
  border: none;
  -webkit-appearance: unset;


  width: 20px;
  height: 16px;
  position: absolute;
  cursor: pointer;
`;

export const StyledBurgerMenuBody = styled.div`
  width: 20px;
  height: 2px;
  position: absolute;
  top: 7px;
  border-radius: 2px;
  background-color: white;

  :before,
  :after {
    position: absolute;
    display: block;
    content: '';
    width: 20px;
    height: 2px;
    background-color: white;
    border-radius: 2px;
  }

  :before {
    top: -6px;
  }

  :after {
    bottom: -6px;
  }
`;
