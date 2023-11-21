import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound">
      <p className="notfound__code">404</p>
      <p className="notfound__message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink className="notfound__link" to="">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
}
