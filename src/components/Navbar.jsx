import { useMediaQuery } from "react-responsive";
import { Button, Link } from "react-scroll";
import NavItem from "./NavItem";

const navigation = [
  { name: "hero", page:"Home" },
  { name: "about", page:"About" },
  { name: "experience", page:"Experience" },
  { name: "projects", page:"Projects" },
  { name: "contact", page:"Contact" },
];

export default function Navbar({ navbarOpen, setNavbarOpen }) {

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const isFixedToTop = isMobile ? 'relative' : 'fixed'
  const nameVisibility = navbarOpen ? 'invisible' : 'visible'

  const handleClick = () => setNavbarOpen(!navbarOpen)

  return (
    <nav className={`flex justify-between p-10 z-50 w-full ${navbarOpen ? 'fixed' : isFixedToTop}`}>
        <Link to="hero">
            <h1 className={`font-robotoSlab text-2xl font-bold flex items-center cursor-pointer ${nameVisibility}`}>
                Christian <br />Leong
            </h1>
        </Link>
        {!isMobile && (
            <ul className="flex list-none items-center p-0 font-light">
                {navigation.map((link, idx) => 
                  <NavItem key={idx} to={link.name} text={link.page} />
                )}
            </ul>
        )}
        {isMobile && 
          <button 
          className="lg:hidden flex top-0 right-0 z-20 relative w-10 h-10 text-black focus:outline-none"
            onClick={handleClick}>
            <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span
                className={`absolute h-0.5 w-5 bg-black transform transition duration-300 ease-in-out ${
                    navbarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
                }`}
                ></span>
                <span
                className={`absolute h-0.5 bg-black transform transition-all duration-200 ease-in-out ${
                    navbarOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
                }`}
                ></span>
                <span
                className={`absolute h-0.5 w-5 bg-black transform transition duration-300 ease-in-out ${
                    navbarOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
                }`}
                ></span>
            </div>
          </button> }
    </nav>
  )
}