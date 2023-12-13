import React from "react";
import "../UI/Style.css";
import { Avatar } from "../Assets";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center mt-10"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left mt-20">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="uppercase font-primary text-[20px] font-bold leading-[0.8] mb-10 lg:text-[40px]"
            >
              Ubong <span>Joseph</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[16px] lg:text-[20px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Software Developer",
                  2000,
                  "UIUX Designer",
                  2000,
                  "Smart Contract Developer",
                  2000,
                  "Writer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-7xl mx-auto lg:mx-0 text-justify"
            >
              As an experienced software engineer, I have a strong background in
              cryptocurrency trading and blockchain product management. I
              possess a deep understanding of technology and innovation, which
              allows me to drive growth.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg text-black uppercase">
                Contact Me
              </button>
              <a href="#" className="text-accent text-10">
                My Portfolio
              </a>
            </motion.div>
            {/* Socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/jkavod" className="cursor-pointer" >
                <FaGithub />
              </a>
              <a href="https://twitter.com/jkavod" className="cursor-pointer" >
                <FaXTwitter />
              </a>
              <a href="https://www.linkedin.com/in/jkavod/" className="cursor-pointer">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>

          {/* My Image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[700px] -mt-32"
          >
            <img src={Avatar} alt="Profile" className="mix-blend-lighten" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
