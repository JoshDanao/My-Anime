

import { List } from "../components/List";
import { AnimeData } from "./lib/types";

export default async function Home() {
  const response = await fetch(`https://api.jikan.moe/v4/anime?q=&sfw`, { next: { revalidate: 5 } });
  const data = await response.json();

  return (
    <main className="flex flex-col min-h-screen mx-20 my-32">
      <List listData={data?.data} isAnime />
    </main>
  )
}
