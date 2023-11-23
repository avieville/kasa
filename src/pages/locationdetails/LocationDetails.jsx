import { useContext } from "react";
import { useParams } from "react-router-dom";
import LocationListContext from "../../contexts/locationListContext";
import Slideshow from "../../components/slideshow/Slideshow";
import { Stars } from "../../components/stars/Stars";
import DropDownItem from "../../components/dropDownItem/DropDownItem";
import { Navigate } from "react-router-dom";

export default function LocationDetails() {
  const { id } = useParams();
  const locationList = useContext(LocationListContext);
  const location = locationList.find((element) => id === element.id);

  return (
    <div className="locationdetails">
      {!location ? (
        <Navigate to="/notfound" replace={true} />
      ) : (
        <>
          <Slideshow pictures={location.pictures} />

          <div className="detailsContainer">
            <div>
              <h1>{location.title}</h1>
              <p className="destination">{location.location}</p>
              <div className="tags">
                {location.tags.map((tag, id) => (
                  <span key={id} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="hostAndStars">
              <div className="host">
                <p>{location.host.name}</p>
                <img src={location.host.picture} alt="personne" />
              </div>

              <div className="stars">
                <Stars score={location.rating} />
              </div>
            </div>
          </div>

          <div className="description-and-equipments">
            <DropDownItem title="Description">
              {location.description}
            </DropDownItem>
            <DropDownItem title="Équipements">
              <ul>
                {location.equipments.map((equipment, id) => (
                  <li key={id}>{equipment}</li>
                ))}
              </ul>
            </DropDownItem>
          </div>
        </>
      )}
    </div>
  );
}
