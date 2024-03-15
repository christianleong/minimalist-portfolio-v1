import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex justify-between relative p-10 z-50">
        <NavLink to="/"><h1 className="font-robotoSlab text-2xl font-bold flex items-center cursor-pointer">Christian <br />Leong</h1></NavLink>
        <ul className="flex list-none items-center p-0 font-light">
            <li><NavLink to="/about" className="m-4 cursor-pointer">About</NavLink></li>
            <li><NavLink to="/experience" className="m-4 cursor-pointer">Experience</NavLink></li>
            <li><NavLink to="/projects" className="m-4 cursor-pointer">Projects</NavLink></li>
            <li><NavLink to="/contact" className="m-4 cursor-pointer">Contact</NavLink></li>
        </ul>
    </nav>
  )
}