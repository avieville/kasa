import { useState } from "react";
import arrow from "../../assets/arrow.png";

export default function Dropdown(props) {
  const { title, children } = props;

  const [opened, setOpened] = useState(false);

  return (
    <div
      className={`accordion ${opened ? "accordion--opened" : ""}`}
      onClick={() => {
        setOpened(!opened);
      }}
    >
      <div className="accordion__line">
        <h3 className="accordion__title">{title}</h3>
        <img src={arrow} className="accordion__icon" alt="arrow" />
      </div>
      <div className="accordion__inner">
        <div className="accordion__content">
          <div className="accordion__paragraph">{children}</div>
        </div>
      </div>
    </div>
  );
}
