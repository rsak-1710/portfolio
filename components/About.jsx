import React from "react";
import Image from "next/image";
import Link from "next/link";
import Profile from "../public/assets/Profile.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-10">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <p className="py-2 text-gray-600">
          I am an enthusiastic and skilled recent graduate with a strong
foundation in web development, particularly experienced in utilizing ReactJS. Possesses a proactive approach to problem-solving
and a willingness to learn and adapt to new technologies. Eager
to apply academic knowledge and practical skills to contribute effectively to a collaborative team environment and pursue growth
opportunities in the field of web development
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={Profile} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
