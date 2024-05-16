import Link from "next/link"
import "./navbar.css";

export default function Navbar() {
    const brand = "EnjoyFest"

    return (
        <div className="navbar navbar-expand-lg bg-body-tertiary">
            <img href='/' className='logo' src="https://cdn.pixabay.com/photo/2017/11/16/09/13/monogram-2953821_1280.png"
            alt="logo"/>
                {brand}
            
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