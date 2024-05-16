import Link from "next/link"
import "./navbar.css";

export default function Navbar() {
    const brand = "EnjoyFest"

    return (
        <div className="navbar navbar-expand-lg bg-body-tertiary">
            <Link href='/' className='logo nav-linkactive'>
                {brand}
            </Link>
            <nav>
                <ul className="navigation">
                    <li>
                    <Link  className="nav-link active" href="/">Accueil</Link>
                    </li>
                    <li>
                    <Link className="nav-link active" href="/voyage">Voyage</Link>
                    </li>
                    <li>
                    <Link className="nav-link active" href="/Contact">Contact</Link>
                    </li>

                </ul>
            </nav>
        </div>
    );
}