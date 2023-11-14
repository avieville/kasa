import bannerImage from "../../assets/home-main-img.png";
import Card from "../../components/card/Card";
import Banner from "../../components/banner/Banner";


export default function Home() {

  const textOnBannerImage = "Chez vous, partout et ailleurs"

  return (
    <div className="home">

      <Banner imageLink={bannerImage} textOnImage={textOnBannerImage}/>
      
      

      <div className="home__card-container">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>

    </div>



  );
}
