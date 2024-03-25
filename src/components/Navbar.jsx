import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll"; // removed as there is a conflict between fullpage.js and react scroll
import HamburgerBtn from "./HamburgerBtn";
import './Navbar.css'

const navigation = [
  { name: "home", page: "Home", href: "/#home" },
  { name: "about", page: "About", href: "/#about" },
  { name: "experience", page: "Experience", href: "/#experience" },
  { name: "projects", page: "Projects", href: "/#projects" },
  { name: "contact", page: "Contact", href: "/#contact" },
];

export default function Navbar({ navbarOpen, setNavbarOpen }) {

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' }) // mobile mode breakpoint
  const isFixedToTop = isMobile ? 'relative' : 'fixed' // navbar is fixed when in desktop mode.
  const nameVisibility = navbarOpen ? 'invisible' : 'visible' // name on top left is hidden when the menu is open in mobile mode.

  const handleClick = () => setNavbarOpen(!navbarOpen) // function passed down to HamburgerBtn so when a link is clicked, it closes the navbar in mobile mode.

  return (
    <nav className={`flex justify-between p-10 z-50 w-full ${navbarOpen ? 'fixed' : isFixedToTop}`}>

      <a href={navigation[0].href}>
          <h1 className={`font-robotoSlab text-2xl font-bold flex items-center cursor-pointer ${nameVisibility}`}>
              Christian {isMobile ? "" : <br/>}Leong
          </h1>
      </a>

      {/* to display navbar links in desktop mode, id="menu" and data-menuanchor are needed with fullpage.js so that class="active" is tracked. lockAnchors in fullpage.js must be set to default 'false', otherwise navbar links won't work.*/}
      {!isMobile && (
          <ul className="flex list-none items-center p-0" id="menu" >
              {navigation.map((link, idx) => (
                <li key={idx} className="m-4 font-light relative" data-menuanchor={link.name} >
                  <a href={link.href}>{link.page}</a>
                </li>
              ))}
          </ul>
      )}

      {isMobile && <HamburgerBtn onClick={handleClick} navbarOpen={navbarOpen} /> }

    </nav>
  )
}