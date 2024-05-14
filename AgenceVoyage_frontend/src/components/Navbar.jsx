import Link from "next/link"
import "./navbar.css";

export default function Navbar() {
    const brand = "EnjoyFest"

    return (
        <div className="navbar navbar-expand-lg bg-body-tertiary">
            <Link href='/' className='logo'>
                {brand}
            </Link>
            <nav>
                <ul className="navigation">
                    <li>
                        <Link href="/">Accueil</Link>
                    </li>
                    <li>
                    <Link href="/voyage">Voyage</Link>
                    </li>
                    <li>
                    <Link href="/destination/contact">Contact</Link>
                    </li>

                </ul>
            </nav>
        </div>
    );
}