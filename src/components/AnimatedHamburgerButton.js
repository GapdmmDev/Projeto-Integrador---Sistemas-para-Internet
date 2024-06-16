import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import styles from "./NavBar.module.css";
import instagramLogo from "../assets/img/instagram.svg";
import tiktokLogo from "../assets/img/tiktok.svg";
import linkedinLogo from "../assets/img/linkedin.svg";
import FramerMagnet from "./FramerMagnet";
import { Link } from "react-scroll";

export const Example = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [active, setActive] = useState(false);

    const handleNavClick = () => {
        setNavOpen(false);
        setActive(false);
    };

    const toggleNav = () => {
        setNavOpen(!navOpen);
        setActive(!active);
    };

    return (
        <>
            <motion.div
                initial={{y: -130}}
                animate={{y: 0, transition:{delay: 1.5}}}
                className="grid place-content-center bg-gradient-to-br mr-5 cursor-pointer z-10"
                onClick={toggleNav}
            >
                <FramerMagnet>
                    <AnimatedHamburgerButton active={active} setActive={setActive} />
                </FramerMagnet>
            </motion.div>

            <div
                className={`${styles.navOverlay} flex flex-col items-center justify-center space-y-28`}
                style={{
                    top: navOpen ? "0" : "-100%",
                    transitionDelay: navOpen ? "0s" : "0s",
                    zIndex: 5,
                }}
            >
                <div className={`${styles.navLinks} space-y-4 sm:space-y-0 font-montserrat`}>
                    
                        
                        <div className="overflow-y-hidden w-screen flex justify-center items-center">
                        <Link to="Home" smooth={true} duration={500} onClick={handleNavClick}>
                        <motion.h3 
                        initial={{y: 130}}
                        animate={{y: navOpen ? 0 : 130 , transition:{delay: .5}}}
                        whileHover={{scale: 1.1}}
                        className="text-8xl sm:text-5xl sm:p-2 cursor-pointer">HOME</motion.h3>
                        </Link>
                        </div>
                        
                    

                    
                        
                        <div className="overflow-y-hidden w-screen flex justify-center items-center">
                        <Link to="Sobre" smooth={true} duration={500} onClick={handleNavClick}>
                        <motion.h3 
                        initial={{y: 130}}
                        animate={{y: navOpen ? 0 : 130 , transition:{delay: .6}}}
                        whileHover={{scale: 1.1}}
                        className="text-8xl sm:text-5xl sm:p-2 cursor-pointer">SOBRE</motion.h3>
                        </Link>
                        </div>

                    
                    
                        <div className="overflow-y-hidden w-screen flex justify-center items-center">
                        <Link to="Projetos" smooth={true} duration={500} onClick={handleNavClick}>
                        <motion.h3 
                        initial={{y: 130}}
                        animate={{y: navOpen ? 0 : 130 , transition:{delay: .7}}}
                        whileHover={{scale: 1.1}}
                        className="text-8xl sm:text-5xl sm:p-2 cursor-pointer">PROJETOS</motion.h3>
                        </Link>
                        </div>
                    

                    
                        <div className="overflow-y-hidden w-screen flex justify-center items-center">
                        <Link to="Footer" smooth={true} duration={500} onClick={handleNavClick}>
                        <motion.h3 
                        initial={{y: 130}}
                        animate={{y: navOpen ? 0 : 130 , transition:{delay: .85}}}
                        whileHover={{scale: 1.1}}
                        className="text-8xl sm:text-5xl sm:p-2 cursor-pointer">CONTATO</motion.h3>
                        </Link>
                        </div>
                    
                </div>

                <motion.div 
                initial={{scale: 0}}
                animate={{scale: navOpen ? 1 : 0, transition:{delay: 1.1}}}
                className="socialLinks flex space-x-5">
                    <a className="cursor-pointer" href="https://www.instagram.com/caa.otica/" target="blank"><motion.img 
                    whileHover={{y: -5}}
                    whileTap={{scale: 0.8}}
                    className="h-8 sm:h-6 cursor-pointer" src={instagramLogo} alt="Logo da rede social instagram" /></a>
                    
                    <a className="cursor-pointer" href="https://www.tiktok.com/@caa.otica?_t=8mvNJ8dFVQ5&_r=1" target="blank"><motion.img 
                    whileHover={{y: -5}}
                    whileTap={{scale: 0.8}}
                    className="h-8 sm:h-6 cursor-pointer" src={tiktokLogo} alt="Logo da rede social tiktok" /></a>

                    <a className="cursor-pointer" href="https://www.linkedin.com/in/caroline-heitzman-de-oliveira-473476231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank"><motion.img 
                    whileHover={{y: -5}}
                    whileTap={{scale: 0.8}}
                    className="h-8 sm:h-6 cursor-pointer" src={linkedinLogo} alt="Logo da rede social linkedin" /></a>
                    
                </motion.div>
            </div>
        </>
    );
};

const AnimatedHamburgerButton = ({ active, setActive }) => {
    return (
        <MotionConfig
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
        >
            <motion.button
                initial={false}
                animate={active ? "open" : "closed"}
                onClick={() => setActive((pv) => !pv)}
                className="relative h-20 w-20 rounded-full bg-white/0 transition-colors cursor-pointer"
            >
                <motion.span
                    variants={VARIANTS.top}
                    className="absolute h-1 w-10 cursor-pointer"
                    style={{ y: "-50%", left: "50%", x: "-50%", top: "35%", backgroundColor: "#fff"}}
                />
                <motion.span
                    variants={VARIANTS.middle}
                    className="absolute h-1 w-10 cursor-pointer"
                    style={{ left: "50%", x: "-50%", top: "50%", y: "-50%", backgroundColor: "#fff"}}
                />
                <motion.span
                    variants={VARIANTS.bottom}
                    className="absolute h-1 w-5 cursor-pointer"
                    style={{
                        x: "-50%",
                        y: "50%",
                        bottom: "35%",
                        left: "calc(50% + 10px)",
                        backgroundColor: "#fff"
                    }}
                />
            </motion.button>
        </MotionConfig>
    );
};

const VARIANTS = {
    top: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            top: ["35%", "50%", "50%"],
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            top: ["50%", "50%", "35%"],
        },
    },
    middle: {
        open: {
            rotate: ["0deg", "0deg", "-45deg"],
        },
        closed: {
            rotate: ["-45deg", "0deg", "0deg"],
        },
    },
    bottom: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            bottom: ["35%", "50%", "50%"],
            left: "50%",
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            bottom: ["50%", "50%", "35%"],
            left: "calc(50% + 10px)",
        },
    },
};
