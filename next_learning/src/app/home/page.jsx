"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function home() {
    const pathname = usePathname();
  return (
    <div>
        page
        <Link className={`link ${pathname==='/home'?'active':''}`} href='/home/profile' >profile</Link>
    </div>
  )
}
