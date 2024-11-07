import logo from "~/assets/react.svg";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const NavMenu = () => {
  const location = useLocation();
  const [active, setActive] = useState("/");
  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);
  return (
    <div className="fixed right-20 top-20">
      <div className="flex flex-col gap-4 items-center">
        <img src={logo} alt="logo" className="w-[56px]" />

        <div className="flex flex-col gap-2 mt-4 text-center">
          <Link
            to="/"
            className="font-medium text-blue-500 relative px-3 py-2 rounded-md cursor-pointer"
          >
            <div>首页</div>
            {active === "/" && (
              <motion.div
                layoutId="active"
                className="w-full bg-blue-100 absolute left-0 bottom-0 h-full rounded-md z-[-1] "
              />
            )}
          </Link>
          <Link
            to="/blog"
            className="font-medium text-blue-500 relative px-3 py-2 rounded-md cursor-pointer"
          >
            <div>博客</div>
            {active === "/blog" && (
              <motion.div
                layoutId="active"
                className="w-full bg-blue-100 absolute left-0 bottom-0 h-full rounded-md z-[-1] "
              />
            )}
          </Link>
          <Link
            to="/about"
            className="font-medium text-blue-500 relative px-3 py-2 rounded-md cursor-pointer"
          >
            <div>关于我们</div>
            {active === "/about" && (
              <motion.div
                layoutId="active"
                className="w-full bg-blue-100 absolute left-0 bottom-0 h-full rounded-md z-[-1] "
              />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
