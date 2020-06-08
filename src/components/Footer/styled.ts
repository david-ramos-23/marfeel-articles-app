import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.theme.sizes.size3};
`;

export const StyledFooterBody = styled.div`
  padding: ${(props) => {
    const { size1, size2, size4 } = props.theme.sizes;
    return `${size4} ${size1} ${size2}`;
  }};
  text-align: center;
  background: ${(props) => props.theme.footer.background};
  color: ${(props) => props.theme.footer.textColor};

  font-family: ${(props) => props.theme.footer.fontFamily};
  font-weight: ${(props) => props.theme.footer.fontWeight};
  font-size: ${(props) => props.theme.footer.fontSize};
`;
