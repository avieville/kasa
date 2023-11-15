import { useContext } from "react";
import { useParams } from "react-router-dom";
import LocationListContext from "../../contexts/locationListContext";

export default function LocationDetails() {
  const { id } = useParams();
  const locationList = useContext(LocationListContext);
  console.log(locationList);

  return <h1>{id}</h1>;
}
