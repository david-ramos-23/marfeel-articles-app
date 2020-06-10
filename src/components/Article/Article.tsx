import React from 'react';
import { ArticleState } from './types';
import {
  StyledArticleContainer,
  StyledArticleImageContainer,
  StyledArticleThumbnail,
  StyledArticleInfoContainer,
  StyledArticleTitle,
  StyledArticleDescription,
} from './styled';

export const Article: React.FunctionComponent<ArticleState> = ({
  title,
  description,
  thumbnail,
}) => {
  const [urlError, setUrlError] = React.useState(null);
  const hasThumbnail = thumbnail && !urlError;

  return (
    <StyledArticleContainer>
      {hasThumbnail && (
        <StyledArticleImageContainer>
          <StyledArticleThumbnail
            src={thumbnail}
            onError={setUrlError}
            alt="thumbnail"
          />
        </StyledArticleImageContainer>
      )}

      <StyledArticleInfoContainer>
        <StyledArticleTitle>{title}</StyledArticleTitle>
        <StyledArticleDescription>{description}</StyledArticleDescription>
      </StyledArticleInfoContainer>
    </StyledArticleContainer>
  );
};

export default Article;
