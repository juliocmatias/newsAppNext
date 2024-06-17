import { useEffect } from "react";

import { NewsCategoryEnum } from "@/enums";

import { fetchNews, selectError, selectLoading, selectNews } from "@/lib/redux";
import { useNewsDispatch, useNewsSelector } from "@/lib/redux/hooks";

export const useNewsFeed = (category: NewsCategoryEnum) => {
  const dispatch = useNewsDispatch();
  const news = useNewsSelector(selectNews)
  const loading = useNewsSelector(selectLoading);
  const error = useNewsSelector(selectError);

  useEffect(() => {
    dispatch(fetchNews(category));
  }, [category, dispatch]);

  return {
    news,
    loading,
    error,
  };
};