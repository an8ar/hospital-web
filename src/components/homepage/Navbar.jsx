import { items } from './constants'
import { MenuItems } from './MenuItems.jsx'

export const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {items.map((menu, index) => {
          return <MenuItems items={menu} key={index} />
        })}
      </ul>
    </nav>
  )
}
