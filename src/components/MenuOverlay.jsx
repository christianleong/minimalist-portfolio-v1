import NavItem from "./NavItem";

export default function MenuOverlay({ navbarOpen, setNavbarOpen }) {

    const navigation = [
        { name: "hero", page:"Home" },
        { name: "about", page:"About" },
        { name: "experience", page:"Experience" },
        { name: "projects", page:"Projects" },
        { name: "contact", page:"Contact" },
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
                        <NavItem key={idx} to={link.name} text={link.page} onClick={handleClick}/>
                    )}
            </ul>
        </nav>
    )
}