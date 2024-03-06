import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const filePath = path.join(
    process.cwd(),
    "docs",
    "resume.pdf"
  );
  const fileData = fs.readFileSync(filePath).toString("base64");

  return {
    props: {
      fileData,
    },
  };
}

const resume = ({ fileData }) => {
  return (
    <>
      <Head>
        <title>Ruchitha Sakaram | Resume</title>
       
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <div className="flex justify-end items-center md:block md:relative">
          <div className="flex justify-end md:block md:absolute md:right-0 md:bottom-0">
            <a
              href={`data:application/pdf;base64,${fileData}`}
              download="resume.pdf"
              className="flex items-center"
            >
              <BsDownload />
              &nbsp;Download Resume
            </a>
          </div>
        </div>
        
       

        {/* Skills */}
       

       

        
       
       
      </div>
    </>
  );
};

export default resume;
