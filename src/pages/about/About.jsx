import Banner from "../../components/banner/Banner";
import bannerImage from "../../assets/image-banner-about.png";
import DropDown from "../../components/dropDown/Dropdown";

export default function About() {
  const fiablityMessage =
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
  const respectOrServiceMessage =
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
  const securityMessage =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

  return (
    <div className="about">
      <Banner imageLink={bannerImage} />

      <div className="dropdown-items-container">
        <DropDown title="Fiabilité">{fiablityMessage}</DropDown>
        <DropDown title="Respect">{respectOrServiceMessage}</DropDown>
        <DropDown title="Service">{respectOrServiceMessage}</DropDown>
        <DropDown title="Sécurité">{securityMessage}</DropDown>
      </div>
    </div>
  );
}
