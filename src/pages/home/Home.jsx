import bannerImage from "../../assets/home-main-img.png";
import Card from "../../components/card/Card";
import Banner from "../../components/banner/Banner";
import { useContext } from "react";
import LocationListContext from "../../contexts/locationListContext";

export default function Home() {
  const locationList = useContext(LocationListContext);
  const textOnBannerImage = "Chez vous, partout et ailleurs";

  return (
    <div className="home">
      <Banner imageLink={bannerImage} textOnImage={textOnBannerImage} />
      <div className="home__card-container">
        {locationList.map((location) => (
          <Card
            key={location.id}
            id={location.id}
            title={location.title}
            imageSrc={location.cover}
          />
        ))}
      </div>
    </div>
  );
}
