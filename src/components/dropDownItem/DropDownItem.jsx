import arrowUp from "../../assets/arrow-up.png";
import arrowDown from "../../assets/arrow-down.png";
import { useState } from "react";


export default function DropDownItem() {

    const [open, setOpen] = useState(false);

    function handleOpen(){
        setOpen(!open);
      };

  return (

    <>
    <div className="dropdownitem">
      <p>Title</p>
      <img src={open ? arrowDown : arrowUp} onClick={ () => handleOpen() } alt="arrow" />
      
    </div>

{open && 
    <p>C'est ouvert</p>
  } 
  </>
    
  );
}
