import Banner from "../../components/banner/Banner";
import bannerImage from "../../assets/image-banner-about.png"
import DropDownItem from "../../components/dropDownItem/DropDownItem"


export default function About() {
  return (
  <div className="about">
    <Banner imageLink={bannerImage}/>

    <div className="dropdown-items-container">
      <DropDownItem/>
      <DropDownItem/>
      <DropDownItem/>
      <DropDownItem/>
      

    </div>

  </div>
  );
}
