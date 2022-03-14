import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import LogoWhite from "../assets/logo_white.png";

export default function Footer() {
  return (
    <footer className="bg-#002147 relative">
      <div className="container mx-auto max-w-5xl   pt-20  ">
        <div className="grid grid-cols-2 pb-12 text-white">
          <div className=" space-y-8">
            <div className="flex items-center space-x-3">
              <Image
                src={LogoWhite}
                width={66}
                height={52}
                layout="intrinsic"
              />
              <h1 className="text-2xl font-extrabold font-Inter">
                For Education
              </h1>
            </div>
            <div>1500 Treat Ave, Suite 200 San Francisco, CA 94110</div>
            <div>vctung@outlook.com</div>
            <div>1-800-800-2299 (Support)</div>
          </div>
          <div className="grid grid-cols-3">
            <div className="space-y-3">
              <div className="font-bold font-Inter text-sm ">Community</div>
              <ul className="font-normal space-y-3">
                <li>Learners</li>
                <li>Partners</li>
                <li>Developers</li>
                <li>Beta Testers</li>
                <li>Translators</li>
                <li>Blog</li>
                <li>Tech Blog</li>
                <li>Teaching Center</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="font-bold font-Inter text-sm ">Informations</div>
              <ul className="font-normal space-y-3">
                <li>About</li>
                <li>Pricing</li>
                <li>Blog</li>
                <li>Carriers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="font-bold font-Inter text-sm ">More</div>
              <ul className="font-normal space-y-3">
                <li>About</li>
                <li>Pricing</li>
                <li>Blog</li>
                <li>Carriers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-#FDC800 py-5 px-9 flex justify-between items-center">
          <div>Copyright © 2021 Tung Chi Vo</div>
          <div className="flex space-x-4">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
}
