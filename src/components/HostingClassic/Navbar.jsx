import image from "../../../public/hosting/S 1.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleOpen = () => {
    setToggle(!toggle);
  };

  return (
    <div className="shadow-lg px-6 2xl:px-0 relative">
      <div className="w-full container mx-auto py-5 font-Dm ">
        <nav className="flex justify-between text-lg h-16 ">
          <div className="flex items-center space-x-10 leading-8">
            <a href="">
              <div className="flex items-center space-x-3">
                <img src={image} alt="" />
                <span className="text-2xl font-bold">StartupLand</span>
              </div>
            </a>
            <div className="hidden lg:flex items-center space-x-10">
              <a href="">Home</a>
              <a href="">Adversite</a>
              <a href="">Supports</a>
              <a href="">About</a>

              <span>
                <SearchRoundedIcon />
              </span>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-10 leading-8">
            <button className="space-x-2 ">
              <span>
                <LockOpenOutlinedIcon />
              </span>
              <span>Login</span>
            </button>
            <button className="bg-[#3CC68A] px-5 text-white font-semibold py-3 rounded-lg text-base">
              Join Community
            </button>
          </div>
          {/* small device */}
          <div
            onClick={handleOpen}
            className="flex justify-center items-center lg:hidden cursor-pointer"
          >
            <MenuIcon style={{ fontSize: "35px" }} />
          </div>
          {toggle ? (
            <div className="transition-opacity duration-500 ease-in-out flex flex-col items-start space-y-5 absolute right-0 bg-white w-72 h-screen p-8 shadow-xl">
              <a href="">Home</a>
              <a href="">Adversite</a>
              <a href="">Supports</a>
              <a href="">About</a>
              <span
                className="absolute right-0 top-0 cursor-pointer"
                onClick={handleOpen}
              >
                <CloseIcon />
              </span>
            </div>
          ) : null}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
