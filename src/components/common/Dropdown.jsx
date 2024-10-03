import React, { useState, useEffect, useRef } from "react";
import uae from "../../Image/uae.png";
const Dropdown = ({ id, data }) => {
  const [showList, setShowList] = useState(false);
  const dropdownRef = useRef(null);

  const initialValue = (
    <div className="flex items-center gap-2">
      <img
        src={uae}
        alt="name flag"
        className="w-7 h-7 rounded-full object-fill"
      />
      <p className="capitalize text-sm md:text-base relative cursor-pointer z-10 transition-all duration-500 text-white">
        United arab emirates
      </p>
    </div>
  );
  const [selected, setSelected] = useState(initialValue);
  const handleChange = (name, img) => {
    const newSelected = (
      <div div className="flex items-center gap-2">
        <img
          src={img}
          alt="name flag"
          className="w-7 h-7 rounded-full object-fill"
        />
        <p className="capitalize text-sm md:text-base relative cursor-pointer z-10 transition-all duration-500 text-white">
          {name}
        </p>
      </div>
    );
    setSelected(newSelected);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowList(false);
    }
  };

  useEffect(() => {
    const handleClick = (event) => {
      if (
        !window.matchMedia("(pointer: coarse)").matches &&
        event.type === "click"
      ) {
        return;
      }
      handleClickOutside(event);
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("touchend", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("touchend", handleClick);
    };
  }, []);

  return (
    <>
      <button
        onClick={() => setShowList((prev) => !prev)}
        onBlur={() => setShowList(false)}
        onTouchStart={() => setShowList((prev) => !prev)}
        id={id}
        data-dropdown-toggle="dropdown"
        className="w-[450px] h-10 text-white focus:outline-none text-sm text-center flex items-center justify-between relative gap-4 capitalize group"
        type="button"
      >
        <span className="text-sm md:text-base">{selected}</span>
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
        <div
          ref={dropdownRef}
          id="dropdown"
          className={`z-[50] w-full absolute top-full left-0 bg-[#232323] mt-1 rounded-xl shadow px-4 py-2 ${
            showList ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <ul
            className="text-sm text-start max-h-[17rem] flex flex-col gap-5 overflow-y-auto"
            aria-labelledby="dropdownDefaultButton"
          >
            {data.map(({ name, img }, idx) => (
              <li
                key={idx}
                onClick={() => handleChange(name, img)}
                className="flex items-center gap-2"
              >
                <img
                  src={img}
                  alt="name flag"
                  className="w-7 h-7 rounded-full object-fill"
                />
                <p className="capitalize text-sm md:text-base relative cursor-pointer z-10 transition-all duration-500 text-white">
                  {name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </button>
    </>
  );
};

export default Dropdown;
