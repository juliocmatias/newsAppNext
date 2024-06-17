import { NewsCategoryEnum } from "@/enums";

import { NewsFeed } from "@/components/NewsFeed";

export default function Sports() {

  return (
    <main>
      <NewsFeed category={NewsCategoryEnum.SPORT}/>
    </main>
  );
}
