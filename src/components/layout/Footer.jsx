import React from "react";
import Logo from "../../Image/logo.svg";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className="bg-black flex flex-col md:flex-row gap-10 justify-between items-start px-5 md:px-10 py-10 text-secondary-white-100/50">
      <div className="flex flex-col gap-5 md:gap-9">
        <img src={Logo} alt="footer-logo" className="w-[180px] md:w-[207px]" />
        <p>2024 Fluid AI</p>
      </div>
      <div className="flex gap-[104px] md:gap-[168px]">
        <div className="flex flex-col gap-4">
          <Link
            to="features"
            offset={-150}
            smooth={true}
            className="cursor-pointer hover:text-white/90"
          >
            Our Features
          </Link>
          <Link
            to="areas"
            offset={-150}
            smooth={true}
            className="cursor-pointer hover:text-white/90"
          >
            Areas
          </Link>
          <Link
            to="faq"
            offset={-150}
            smooth={true}
            className="cursor-pointer hover:text-white/90"
          >
            FAQs
          </Link>
          <Link
            to="waitlist"
            offset={-150}
            smooth={true}
            className="cursor-pointer hover:text-white/90"
          >
            The Wait list
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <div className="cursor-pointer">Terms of service</div>
          <div className="cursor-pointer">Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
