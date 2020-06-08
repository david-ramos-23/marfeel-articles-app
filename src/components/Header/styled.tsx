import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${(props) => props.theme.header.background};
  color: ${(props) => props.theme.colors.secondary};
`;

export const StyledHeaderTop = styled.section`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  padding: ${(props) =>
    `${props.theme.sizes.size1} ${props.theme.sizes.size2}`};
`;

export const StyledHeaderTitle = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;
