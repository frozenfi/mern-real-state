import { useState } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import { FaSearch } from "react-icons/fa";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { useSelector } from "react-redux";

const Header = (isTopOfPage) => {
  const { currentUser } = useSelector((state) => state.user);
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const navbarBackground = isTopOfPage ? "" : "bg-slate-50 drop shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-15 w-5/6`}>
          <div className={`${flexBetween} w-full gap-6 md:gap-10`}>
            {/* LEFT SIDE */}
            <Link to="/">
              <h1 className="font-bold text-xl">
                <span className="text-slate-400">Ghar</span>
                <span className="text-slate-700">Jagga</span>
              </h1>
            </Link>

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <ul className={`${flexBetween} gap-6 md:gap-8 text-sm`}>
                  <Link to="/">
                    <li className="text-slate-950 hover:text-slate-500 font-bold">
                      Home
                    </li>
                  </Link>
                  <Link to="/about">
                    <li className="text-slate-950 hover:text-slate-500 font-bold">
                      About
                    </li>
                  </Link>
                  <Link to="/contact-us">
                    <li className="text-slate-950 hover:text-slate-500 font-bold">
                      Contact
                    </li>
                  </Link>
                </ul>
                <div className={`${flexBetween} gap-4 md:gap-8`}>
                  <form
                    action=""
                    className="bg-slate-200 p-2 rounded-lg flex items-center md:mr-4"
                  >
                    <input
                      type="text"
                      placeholder="Search"
                      className="bg-transparent focus:outline-none w-14 md:w-32"
                    />
                    <FaSearch className="bg-transparent focus:outline-none w-14 ml-1" />
                  </form>

                  <Link to="/profile">
                    {currentUser ? (
                      <img
                        className="rounded-full h-7 w-7 object-cover"
                        src={currentUser.avatar}
                        alt="profile"
                      />
                    ) : (
                      <div className="rounded-md bg-slate-700 text-white px-10 py-2 hover:bg-slate-500 hover:text-white">
                        <p>Sign in</p>
                      </div>
                    )}
                  </Link>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-slate-400 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <HiBars3 className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/*MOBILE MENU VIEW */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-slate-50 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <HiXMark className="h-8 w-8 text-gray-400" />
            </button>
          </div>
          <div className="ml-[28%] flex flex-col text-xl gap-4">
            <ul className="space-y-6">
              <Link to="/" onClick={() => setIsMenuToggled(false)}>
                <li className="my-5 text-slate-950 hover:text-slate-500 font-bold">
                  Home
                </li>
              </Link>
              <Link to="/about" onClick={() => setIsMenuToggled(false)}>
                <li className="my-5 text-slate-950 hover:text-slate-500 font-bold">
                  About
                </li>
              </Link>
              <Link to="/contact-us" onClick={() => setIsMenuToggled(false)}>
                <li className="text-slate-950 hover:text-slate-500 font-bold">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
