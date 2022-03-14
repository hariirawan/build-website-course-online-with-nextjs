import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaRegEnvelope,
} from "react-icons/fa";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="text-sm">
      <div className="bg-#FDC800 ">
        <div className="container mx-auto max-w-5xl flex justify-between items-center py-3">
          <div className="flex space-x-6">
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <h6>1600 Amphitheatre Parkway, CA 94043</h6>
            </div>
            <div className="flex items-center">
              <FaRegEnvelope className="mr-2" />
              <h6>hy.iraone@gmail.com</h6>
            </div>
          </div>
          <div className="flex space-x-4">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
      <nav className="bg-#F0F4F9 p-6 ">
        <div className="container mx-auto max-w-5xl flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image src={Logo} width={66} height={52} layout="intrinsic" />
            <h1 className="text-2xl font-extrabold font-Inter">
              For Education
            </h1>
          </div>
          <div className="flex space-x-8 items-center">
            <ul className="flex space-x-4">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/#about"}>About</Link>
              </li>
              <li>
                <Link href={"/#contact"}>Contact</Link>
              </li>
              <li>
                <Link href={"/courses"}>Courses</Link>
              </li>
            </ul>
            <button className="rounded-sm bg-#FDC800 py-3 px-7">Sign Up</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
