import styled from 'styled-components';
import { StyledArticleProps } from './types';

export const StyledArticleContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

export const StyledArticleImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: ${(props) => props.theme.sizes.size2};
`;

export const StyledArticleInfoContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

export const StyledArticleThumbnail = styled.img<StyledArticleProps>`
  max-width: 100%;
  height: auto;
`;

export const StyledArticleTitle = styled.h1`
  font-family: ${(props) => props.theme.articles.fontFamily};
  font-size: ${(props) => props.theme.sizes.size2};
  text-transform: capitalize;
  padding-bottom: ${(props) => props.theme.sizes.size1};
`;

export const StyledArticleDescription = styled.p`
  font-family: ${(props) => props.theme.articles.fontFamily};
`;
