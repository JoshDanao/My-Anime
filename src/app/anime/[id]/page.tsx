import Image from "next/image";
import { AnimeData } from "@/app/lib/types";

export default async function Anime({ params }: { params: { id: string } } ) {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${params.id}/full`);
  const data = await response.json();
  const animeData: AnimeData = data?.data;

  return (
    <div className="mx-20 my-32">
      <Image 
        width={300}
        height={300} 
        alt={animeData?.title} 
        src={animeData?.images?.jpg?.image_url}
      />
      <div className="flex items-center space-x-3">
        <span>Name:</span>
        <h3 className="my-8">{animeData?.title}</h3>
      </div>
      <div className="flex space-x-3">
        <span>Genres:</span>
        <ul className="flex mb-6 space-x-3">
        {animeData?.genres?.map((genre) => (
          <li key={genre?.name}>{genre?.name}</li>
        ))}
      </ul>
      </div>
      <div className="flex space-x-3">
        <span>Description:</span>
        <p>{animeData?.synopsis}</p>
      </div>
    </div>
  )
}
