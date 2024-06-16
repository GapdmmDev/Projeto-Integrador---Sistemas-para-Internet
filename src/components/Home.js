import styles from "./Home.module.css"
import arrowDown from "../assets/img/arrow-down.svg"
import NavBar from './NavBar';
import React, { useState, useEffect } from 'react';
import { animate, delay, motion } from "framer-motion"
import { Element } from "react-scroll";
import { hover } from "@testing-library/user-event/dist/hover";

function Home() {

    const exclamacaoVar = {

        hover: {
            scale: 1.1
        },
        initial: {
            y: 0
        },
        animate: {
            y: 100,
            transition: {

                delay: 1.6
            }
        }
    }

    return (

        <>

            <NavBar />



            <Element name="Home">
                <section className={styles.sectionHome}>

                    <div className={` flex font-montserrat justify-center flex-col items-start h-screen select-none mt-8 text-white`}>

                        <div className={`${styles.tittleContainer} mt-0`}>
                            <motion.h2
                                initial={{ x: -150 }}
                                animate={{ x: 0, transition: { delay: 0 } }}
                                className={styles.caheitz}>CA, HEITZ </motion.h2>
                            <motion.h2 initial={{ x: -150 }} whileHover={{ y: -10 }} animate={{ x: 0 }}>!</motion.h2>
                        </div>

                        <div className={`${styles.tittleContainer} overflow-y-hidden mt-0`}>
                            <motion.h2
                                initial={{ y: 130 }}
                                animate={{ y: 0, transition: { delay: .5 } }}

                                className={styles.designer}>DESIGNER &</motion.h2>

                        </div>

                        <div className={`${styles.tittleContainer} overflow-y-hidden mt-0`}>
                            <motion.h2
                                initial={{ y: 130 }}
                                animate={{ y: 0, transition: { delay: .7 } }}

                                className={styles.ilustradora}>ILUSTRADORA</motion.h2>
                        </div>


                        <div className={`${styles.tittleContainer} overflow-y-hidden mt-0`}>
                            <motion.h2
                                initial={{ y: 130 }}
                                animate={{ y: 0, transition: { delay: 1 } }}

                                className={styles.digital}>DIGITAL</motion.h2>
                        </div>

                    </div>

                    <div className={`${styles.bottom} overflow-y-hidden lg:h-min text-white`}>

                        <motion.div
                            initial={{ y: 130 }}
                            animate={{ y: 0, transition: { delay: 1.5 } }}

                            className={styles.email}>
                            <span className="select-none">Email:</span>
                            <span>heitzmanzita@gmail.com</span>
                        </motion.div>


                        <motion.p
                            initial={{ y: 130 }}
                            animate={{ y: 0, transition: { delay: 1.5 } }}
                        >Descubra a arte em cada detalhe. <br /> Sinta a magia do design.</motion.p>
                    </div>

                </section>
            </Element>




        </>
    )
}

export default Home



