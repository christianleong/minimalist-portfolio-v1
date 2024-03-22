import { Link } from "react-scroll";

export default function NavItem({ to, text, onClick }) {
    return (
        <li>
            <Link
                to={to}
                className="m-4 cursor-pointer"
                spy={true}
                smooth={true}
                duration={1000}
                 onClick={onClick}
            >
                {text}
            </Link>
        </li>
    )
}