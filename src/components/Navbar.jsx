import NavbarItem from "./NavbarItem"

function Navbar() {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-200 p-4 lg:text-lg justify-center gap-6">
        <NavbarItem title="trending" param="fetchTrending" />
        <NavbarItem title="tp muted" param="fetchTopMuted" />
    </div>
  )
}

export default Navbar