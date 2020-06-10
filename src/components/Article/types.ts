export interface ArticleState {
  id: number;
  title: string;
  description: string;
  thumbnail?: string;
}

export interface StyledArticleProps {
  onError: any;
}
