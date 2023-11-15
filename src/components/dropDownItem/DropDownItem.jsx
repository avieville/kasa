import arrowUp from "../../assets/arrow-up.png";
import arrowDown from "../../assets/arrow-down.png";
import { useState } from "react";

export default function DropDownItem(props) {
  const [open, setOpen] = useState(false);
  const { title, message } = props;

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <>
      <div className="dropdownitem">
        <div className="dropdownitem__header">
          <p>{title}</p>
          <img
            src={open ? arrowDown : arrowUp}
            onClick={() => handleOpen()}
            alt="arrow"
          />
        </div>
        {open && <p className="dropdownitem__message">{message}</p>}
      </div>
    </>
  );
}
