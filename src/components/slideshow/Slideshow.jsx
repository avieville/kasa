import { useState } from "react";
import arrowPrev from "../../assets/arrow-prev-slider.png";
import arrowNext from "../../assets/arrow_next-slider.png";

export default function Slideshow(props) {
  const { pictures } = props;

  const [index, setIndex] = useState(0);

  function showPreviousImage() {
    setIndex(index !== 0 ? index - 1 : pictures.length - 1);
  }

  function showNextImage() {
    setIndex(index !== pictures.length - 1 ? index + 1 : 0);
  }

  return (
    <div className="slideshow">
      <div className="slideshow__pictures-container">
        <img
          src={pictures[index]}
          alt="interior of the location"
          className="slideshow__pictures-container__picture"
        />
      </div>

      <img
        className="slideshow__arrow slideshow__arrowPrev"
        src={arrowPrev}
        alt="arrow"
        onClick={() => showPreviousImage()}
      />
      <img
        className="slideshow__arrow slideshow__arrowNext"
        src={arrowNext}
        alt="arrow"
        onClick={() => showNextImage()}
      />
      <p className="slideshow__pagination">{`${index + 1}/${
        pictures.length
      }`}</p>
    </div>
  );
}
