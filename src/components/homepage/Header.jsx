import { Navbar } from './Navbar'
import { SearchBar } from './SearchBar'

export const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <div className="left">
          <a href="/" className="logo">
            Logo
          </a>
          <Navbar />
        </div>
        <SearchBar />
      </div>
    </header>
  )
}
