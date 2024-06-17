import { NewsCategoryEnum } from "@/enums";

import { NewsFeed } from "@/components/NewsFeed";

export default function Business() {
  return (
    <main>
      <NewsFeed category={NewsCategoryEnum.BUSINESS}/>
    </main>
  );
}