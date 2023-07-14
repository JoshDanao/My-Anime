
import { AxiosResponse } from "axios";
import Link from "next/link";
import { AnimeData } from "@/app/lib/types";

type ListProps = {
  listData: AnimeData[],
  isAnime?: boolean,
  isManga?: boolean,
}

export const List = ({ listData, isManga, isAnime }: ListProps) => {
  return (
    <div>
      {isAnime && (
        listData?.map((anime) => (
          <ul style={{ marginBottom: 20 }} key={anime?.title}>
            <li>
              <Link href={`/anime/${anime?.mal_id}`}>{anime?.title}</Link>
            </li>
          </ul>
        ))
      )}
      {isManga && (
        listData?.map((manga) => (
          <ul style={{ marginBottom: 20 }} key={manga?.title}>
            <li>
              <Link href={`/manga/${manga?.mal_id}`}>{manga?.title}</Link>
            </li>
          </ul>
        ))
      )}
    </div>
  )
}