import { NewsCategoryEnum } from "@/enums";

import { NewsFeed } from "@/components/NewsFeed";

export default function Health() {

  return (
    <main>
      <NewsFeed category={NewsCategoryEnum.HEALTH}/>
    </main>
  );
}
