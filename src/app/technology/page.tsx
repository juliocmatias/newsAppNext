import { NewsCategoryEnum } from "@/enums";

import { NewsFeed } from "@/components/NewsFeed";

export default function Technology() {

  return (
    <main>
      <NewsFeed category={NewsCategoryEnum.TECHNOLOGY}/>
    </main>
  );
}
