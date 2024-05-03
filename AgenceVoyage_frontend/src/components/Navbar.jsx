import Link from "next/link"

export default function Navbar() {
    const brand = "EnjoyFest"

    return (
        <div className="navbar">
            <Link href='/' className='logo'>
                {brand}
            </Link>
            <nav>
                <ul className="naviagation">
                    <li>
                        Accueil
                    </li>
                    <li>
                        Destination
                    </li>
                    <li>
                        Contact
                    </li>

                </ul>
            </nav>
        </div>
    )
}