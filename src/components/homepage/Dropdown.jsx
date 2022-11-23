export const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`dropdown ${dropdown ? 'show' : ''}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className="menu-items">
          <a href={`departments/${submenu.url}`}>{submenu.title}</a>
        </li>
      ))}
    </ul>
  )
}
