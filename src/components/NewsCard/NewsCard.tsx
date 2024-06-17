import { NewsCategoryEnum } from "@/enums";
import { Article } from "@/types";
import path from "path";

import * as S from './styles';

type NewsCardProps = {
  article: Article,
  category: NewsCategoryEnum
};

export const NewsCard = ({ article, category }: NewsCardProps) => {
  const { title, urlToImage, publishedAt, source, id } = article;

  if(title === "[Removed]" || title === "[Deleted]" || !title) return null;

  if(Object.values(source).some(value => value === null)) return null;

  const hrefPath = path.join('/', category === NewsCategoryEnum.HOME_PAGE ? 'home' : category.toString(), id);

  const currentImage = urlToImage ? urlToImage : "/assets/images/null.jpg";

  return (
    <>
      <S.LinkCard href={hrefPath}>
        <S.ContainerImg>
          <S.Img 
            src={currentImage}
            alt="title"
            sizes="100%"
          />
        </S.ContainerImg>

        <S.ContainerCard>
          <S.ContainerSource>
            <S.Source>Source: {source.name}</S.Source>
          </S.ContainerSource>

          <S.NewsDate>
            {new Date(publishedAt).toLocaleDateString()}
          </S.NewsDate>

          <S.NewsTitle>
            {title}
          </S.NewsTitle>
        </S.ContainerCard>
      </S.LinkCard>
    </>
  )
}