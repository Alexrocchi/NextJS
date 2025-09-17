import Link from "next/link";

function NavBar() {
  return (
    <nav className="bg-amber-400 p-4 text-white flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">Todos App</Link>
    </nav>
  )
}

export default NavBar
