export type Article = {
  source: {
      id: null;
      name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export type NewsData = {
  data: {
    status: string;
    totalResults: number;
    articles: Article[];
  };
}

export type News = Article[]