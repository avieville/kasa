import { NavLink } from "react-router-dom";

export default function Card(props) {
  const { id, title, imageSrc } = props;
  return (
    <NavLink to={`/details/${id}`}>
      <article className="card">
        <img src={imageSrc} alt="interior of the location" />
        <p>{title}</p>
      </article>
    </NavLink>
  );
}
