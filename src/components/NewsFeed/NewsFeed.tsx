'use client'

import { NewsCategoryEnum } from "@/enums";

import { Grid } from "@/components/Grid";
import { NewsCard } from "@/components/NewsCard";

import { useNewsFeed } from "./Hooks";

type NewsFeedProps = {
  category: NewsCategoryEnum;
};

export const NewsFeed = ({ category }: NewsFeedProps) => {
  const { news } = useNewsFeed(category);

  return (
    <>
      <Grid sm={1} md={2} lg={3} gap={10}>
        {news.map((article) => (
          <NewsCard key={ article.id } article={ article } category={ category }/>
        ))}
      </Grid>
    </>
  )
};