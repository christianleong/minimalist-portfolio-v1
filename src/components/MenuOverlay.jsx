import NavItemMobile from "./NavItemMobile";

export default function MenuOverlay({ navbarOpen, setNavbarOpen }) {

    const navigation = [
        { name: "home", page: "Home", href: "/#home" },
        { name: "about", page: "About", href: "/#about" },
        { name: "experience", page: "Experience", href: "/#experience" },
        { name: "projects", page: "Projects", href: "/#projects" },
        { name: "contact", page: "Contact", href: "/#contact" },
    ];

    const handleClick = () => setNavbarOpen(false)

    return (
        <nav 
            className={`
                fixed flex justify-center top-0 left-0 w-full px-10 z-10 h-screen bg-white transform delay-100 transition-all duration-300 
            ${navbarOpen 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 -translate-y-full"
            }`}
        >
            <ul className="flex flex-col list-none items-center gap-10 justify-center p-0 font-thin text-2xl">
                    {navigation.map((link, idx) => 
                        <NavItemMobile key={idx} to={link.name} text={link.page} onClick={handleClick}/>
                    )}
            </ul>
        </nav>
    )
}