import logo from "../../assets/logo-navbar.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="logo de kasa" />

            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
