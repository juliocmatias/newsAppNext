import { NewsCategoryEnum } from "@/enums";

import { NewsFeed } from "@/components/NewsFeed";

export default function Home() {

  return (
    <main>
      <NewsFeed category={NewsCategoryEnum.HOME_PAGE}/>
    </main>
  );
}
