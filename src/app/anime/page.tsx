"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { AnimeData } from "../lib/types";
import { List } from "@/components/List";

export default function AnimePage() {
  const [anime, setAnime] = useState('')
  const [animeData, setAnimeData] = useState<AnimeData[]>([]);

  const getAnimeData = async () => {
    const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${anime}`);
    setAnimeData(response?.data?.data);
  }

  const onSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getAnimeData();
  }

  useEffect(() => {
    getAnimeData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(animeData)

  return (
    <div className="mx-20 my-32">
      <div className="flex items-center justify-end mb-12">
        <form onSubmit={onSubmit}>
          <input placeholder="Search your anime" onChange={(e) => setAnime(e.target.value)} className="mb-6 border-b-2 outline-none" type='text'/>
        </form>
      </div>
      <List listData={animeData} isAnime />
    </div>
  )
}