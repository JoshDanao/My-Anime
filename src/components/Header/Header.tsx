import Link from "next/link"

export const Header = () => {
  return (
    <div className="fixed top-0 left-0 flex justify-between w-full px-10 py-6 text-white bg-black">
      <h2><Link href='/'>MyAnime</Link></h2>
      <ul className="flex space-x-4">
        <li><Link href='/anime'>Anime</Link></li>
        <li><Link href='/manga'>Manga</Link></li>
        <li><Link href='/profile'>Profile</Link></li>
      </ul>
    </div>
  )
}