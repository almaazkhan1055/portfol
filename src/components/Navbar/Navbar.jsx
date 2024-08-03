import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
    </div>
  );
};

export default Navbar;
