import arrowUp from "../../assets/arrow-up.png";
import arrowDown from "../../assets/arrow-down.png";
import { useState } from "react";

export default function DropDownItem(props) {
  const [open, setOpen] = useState(false);
  const { title, children } = props;

  function handleToggle() {
    setOpen(!open);
  }

  return (
    <>
      <div className="dropdownitem">
        <div className="dropdownitem__header" onClick={() => handleToggle()} >
          <h2>{title}</h2>
          <img
            src={open ? arrowDown : arrowUp}       
            alt="arrow"
          />
        </div>
        {open && <div className="dropdownitem__message">{children}</div>}
      </div>
    </>
  );
}
