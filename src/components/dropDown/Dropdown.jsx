import { useState } from "react";
import arrow from "../../assets/arrow.png";

export default function Dropdown(props) {
  const { title, children } = props;

  const [opened, setOpened] = useState(false);

  return (
    <div
      className={`dropdown ${opened ? "dropdown--opened" : ""}`}
      onClick={() => {
        setOpened(!opened);
      }}
    >
      <div className="dropdown__line">
        <h3 className="dropdown__title">{title}</h3>
        <img src={arrow} className="dropdown__icon" alt="arrow" />
      </div>
      <div className="dropdown__inner">
        <div className="dropdown__content">
          <div className="dropdown__paragraph">{children}</div>
        </div>
      </div>
    </div>
  );
}
