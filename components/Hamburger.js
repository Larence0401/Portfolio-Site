import { useEffect, useRef } from "react";
const Hamburger = ({ toggleMenu, showMenu }) => {

  const cbRef = useRef();

  useEffect(() => {
    if (!showMenu) {
      cbRef.current.checked = false;
    } else if(showMenu) {
      cbRef.current.checked = true;
    }
  }, [showMenu]);

  return (
    <div className="hamburger md:hidden" onClick={toggleMenu}>
      <div className="hamburger__container">
        <input type="checkbox" id="toggle" ref={cbRef} />
        <div className="hambuger">
          <div className="hambuger__item"></div>
          <div className="hambuger__item"></div>
          <div className="hambuger__item"></div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
