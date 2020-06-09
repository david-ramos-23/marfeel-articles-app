import styled from 'styled-components';

import MediaBlock from 'react-placeholder/lib/placeholders/MediaBlock';

export const StyledMainMediaBlock = styled(MediaBlock)`
  padding: ${(props) => props.theme.sizes.size1};
  margin-top: ${(props) => props.theme.sizes.size1};
  border: 1px solid ${(props) => props.color};
  :first-child {
    margin-top: 0;
  }
`;

export const StyledMain = styled.section`
  padding: ${(props) => props.theme.sizes.size1};
  margin-top: 65px;
`;
