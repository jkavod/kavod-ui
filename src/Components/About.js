import React from "react";
import "../UI/Style.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center justify-between lg:gap-x-20 h-screen ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 bg-about w-[100vw] bg-contain bg-no-repeat h-[900px] mix-blend-lighten bg-top"
          ></motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col"
          >
            <h1 className="h2 text-accent">About me</h1>
            <h3 className="h3 mb-4 text-secondary">
              I am a freelance software developer
            </h3>
            <p className="text-secondary max-w-lg mb-10 text-justify">My passion for the decentralized web and its potential to revolutionize the technology industry motivates me to stay up-to-date with the latest Web3 technologies such as Ethereum, Polkadot, and IPFS. </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-accent mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years <br /> of experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-accent mb-2">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-accent mb-2">
                  {inView ? <CountUp start={0} end={8} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
            <div>
              <button className="btn btn-lg mr-5 text-dark font-bold">Contact Me</button>
              <a href="#" className="text-accent btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
