"use client"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

function NavbarItem({title,param}) {
    const useParmas = useSearchParams();
    const genre = useParmas.get("genre");
  return (
    <div>
        <Link className={`capitalize hover:text-amber-600 ${genre==param ? 'underline underline-offset-8 decoration-4 decoration-amber-600 rounded-lg':''}`} href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}

export default NavbarItem