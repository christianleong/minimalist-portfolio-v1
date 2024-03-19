import { Link } from "react-scroll";

// const navigation = [
//   { name: "hero", page:"Home", href: "/", current: false },
//   { name: "about", page:"About", href: "/about", current: false },
//   { name: "experience", page:"Experience", href: "/experience", current: false },
//   { name: "projects", page:"Projects", href: "/projects", current: false },
//   { name: "contact", page:"Contact", href: "/contact", current: false },
// ];

export default function Navbar() {
  return (
    <nav className="flex justify-between fixed p-10 z-50 w-full">
        <Link to="hero"><h1 className="font-robotoSlab text-2xl font-bold flex items-center cursor-pointer">Christian <br />Leong</h1></Link>
        <ul className="flex list-none items-center p-0 font-light">
            <li>
              <Link 
                to="hero" 
                className="m-4 cursor-pointer"
                spy={true}
                smooth={true}
                duration={850}
                href="/">
                  Home
              </Link>
            </li>
            <li>
              <Link 
                to="about" 
                className="m-4 cursor-pointer"
                spy={true}
                smooth={true}
                duration={850}
                href="/about">
                  About
              </Link>
            </li>
            <li>
              <Link 
                to="experience" 
                className="m-4 cursor-pointer"
                spy={true}
                smooth={true}
                duration={850}
                href="/experience">
                  Experience
              </Link>
            </li>
            <li>
              <Link 
                to="projects" 
                className="m-4 cursor-pointer"
                spy={true}
                smooth={true}
                duration={850}
                href="/projects">
                  Projects
              </Link>
            </li>
            <li>
              <Link 
                to="contact" 
                className="m-4 cursor-pointer"
                spy={true}
                smooth={true}
                duration={850}
                href="/contact">
                  Contact
              </Link>
            </li>
        </ul>
    </nav>
  )
}