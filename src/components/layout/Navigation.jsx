import React, { useEffect, useRef, useState } from "react";
import Menu from "../../Image/menu.svg";
import Close from "../../Image/close.svg";
const Navigation = () => {
  const divEl = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler, true);
    };
  });
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="hidden md:flex justify-between px-10 py-[44px]">
        <div className="flex gap-[76px] text-base">
          <div className="cursor-pointer">Our Features</div>
          <div className="cursor-pointer">Areas</div>
        </div>
        <div className="flex gap-[76px]">
          <div className="cursor-pointer">FAQs</div>
          <div className="cursor-pointer">The Wait list</div>
        </div>
      </div>
      <div className="flex justify-end md:hidden ">
        <div className="pr-5 pt-10">
          <img src={Menu} alt="" className="w-6 h-6" onClick={handleClose} />
        </div>
        <div
          ref={divEl}
          className={`${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } fixed top-0 bg-primary-black-100/95 z-[1000] w-full   pl-5 transition-all duration-500 `}
        >
          {isOpen && (
            <div className="flex justify-end pr-5">
              <img
                src={Close}
                alt=""
                className="mt-10 w-6 h-6  items-end"
                onClick={handleClose}
              />
            </div>
          )}
          <div className=" py-20 flex flex-col items-center gap-5 text-base">
            <div className="cursor-pointer" onClick={handleClose}>
              Our Features
            </div>
            <div className="cursor-pointer" onClick={handleClose}>
              Areas
            </div>
            <div className="cursor-pointer" onClick={handleClose}>
              FAQs
            </div>
            <div className="cursor-pointer" onClick={handleClose}>
              The Wait list
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
