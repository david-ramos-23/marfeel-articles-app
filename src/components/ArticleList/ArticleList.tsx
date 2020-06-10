import React from 'react';
import { useSection } from '../../hooks';
import { STATUS } from '../../hooks/useSection';
import Article from '../Article/Article';
import { ArticleState } from '../Article/types';
import { StyledArticleList } from './styled';

export const ArticleList: React.FunctionComponent = () => {
  const [{ selected, articles, status }, { getSection }] = useSection();
  React.useEffect(() => {
    const getArticles = async () => {
      await getSection(selected);
    };
    if (!articles[selected].length && status !== STATUS.LOADING) getArticles();
  }, [getSection, articles, selected, status]);

  if (status === STATUS.ERROR)
    return <p>Something went wrong, try again in a few minutes. </p>;
  if (status === STATUS.LOADING) return <p>Loading...</p>;

  return (
    <StyledArticleList>
      {articles[selected].map((article: ArticleState, index: number) => (
        <div key={article.id}>
          <Article
            id={article.id}
            title={article.title}
            description={article.description}
            thumbnail={article.thumbnail}
          />
          {index < articles[selected].length - 1 && <hr />}
        </div>
      ))}
    </StyledArticleList>
  );
};
