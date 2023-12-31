import React from "react";
import "../UI/Style.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { PortfolioImgA, PortfolioImgB, PortfolioImgC } from "../Assets";

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
           variants={fadeIn("right", 0.3)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.7 }}
          className="flex-1 flex flex-col gap-y-12 mb-10 lh:mb-0">
            <div>
              <h2 className="h2 leading-tight text-primary">
                My Latest <br /> Work
              </h2>
              <p className="max-w-2xl mb-16 text-justify">I have a talent for identifying emerging trends and opportunities and staying ahead of the curve in technology and innovation. As a team player, I enjoy working collaboratively with other engineers, data scientists, and product managers to drive innovation and growth for my organization.</p>
              <button className="btn btn-sm">View All Projects</button>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={PortfolioImgC}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-primary">FrontEnd Development</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">AgricIntuit</span>
              </div>
            </div>
          </motion.div>
          <motion.div
           variants={fadeIn("left", 0.5)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.7 }}
          className="flex-1 flex flex-col gap-y-10">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={PortfolioImgB}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-primary">FrontEnd Development</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">LogicGraph</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={PortfolioImgA}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-primary">FrontEnd Development</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Emeka Amadi Foundation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
