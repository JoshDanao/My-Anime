"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { AnimeData } from "../lib/types";
import { List } from "@/components/List";

export default function MangaPage() {
  const [manga, setManga] = useState('')
  const [mangaData, setMangaData] = useState<AnimeData[]>([]);

  const getMangaData = async () => {
    const response = await axios.get(`https://api.jikan.moe/v4/manga?q=${manga}`);
    setMangaData(response?.data?.data);
  }

  const onSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getMangaData();
  }

  useEffect(() => {
    getMangaData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="mx-20 my-32">
      <div className="flex items-center justify-end mb-12">
        <form onSubmit={onSubmit}>
          <input placeholder="Search your manga" onChange={(e) => setManga(e.target.value)} className="mb-6 border-b-2 outline-none" type='text'/>
        </form>
      </div>
      <List listData={mangaData} isManga />
    </div>
  )
}