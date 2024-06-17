'use client'

import Link from "next/link";

import { selectNews } from "@/lib";
import { useNewsSelector } from "@/lib/redux/hooks";

import { BackButton } from "./components";
import * as S from "./styles";

type NewsProps = {
  id: string;
};

export const News = ({ id }: NewsProps) => {
  const news = useNewsSelector(selectNews);

  const article = news.find((article) => article.id === id);

  if (!article) return null;

  const { title, urlToImage, publishedAt, source, description, author, content, url } = article;
  const { name } = source;

  const currentContent = content.replace(/\[\+\d+ chars\]/g, '');
  const contentArray = currentContent.split('\n');

  const fig = contentArray.length > 1 ? contentArray[0] : '';


  const formattedDate = new Date(publishedAt).toLocaleDateString();

  return (
    <div>
      <S.Container>
        <S.IconContainer>
          <BackButton />
        </S.IconContainer>
        <S.ImageContainer>
          <figure>
            <S.Image src={urlToImage} alt={title} sizes="100%"/>
            <figcaption className="text-center text-gray-600 mt-2">{fig}</figcaption>
          </figure>
        </S.ImageContainer>
        <S.Content>
          <S.DateContainer>
            <S.Title>{title}</S.Title>
            <S.Date>
              {formattedDate}
            </S.Date>
            <p className="text-gray-400">Source: {name}</p>
            <p className="text-gray-400 mb-2">Author: {author}</p>
            <S.Description>{description}</S.Description>
            <p className="text-xl mb-4">{currentContent}</p>
          </S.DateContainer>
        </S.Content>
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-700"
        >
          Read more
        </Link>
      </S.Container>
    </div>
  );
};