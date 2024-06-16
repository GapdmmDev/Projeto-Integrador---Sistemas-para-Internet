import { useScroll, useTransform, motion } from "framer-motion"
import { useRef, useState } from "react"
import textDecorationRight from "../assets/img/text-decoration-right.svg"
import styles from "./Projetos.module.css"
import superDogao from "../assets/img/super-dogao.svg"

function ProjetoRight() {

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container.current,
        offset: ['start end', 'end start']
    })

    const sm = useTransform(scrollYProgress, [0, 1], [0, -50])
    const md = useTransform(scrollYProgress, [0, 1], [0, -150])
    const lg = useTransform(scrollYProgress, [0, 1], [500, -500])

    return (
        <div ref={container}>
            <div className={`${styles.containerProjetos}w-screen p-72 sm:p-0 sm:pt-48 flex md:flex-col-reverse md:items-center justify-center`}>
                <div className="flex items-center justify-center mr-48 xl:mr-24 md:w-screen md:mr-08 sm:mr-0 md:mr-0">
                <motion.div style={{y: lg}} className={`${styles.textProjetos} mb-5 mr-5 2xl:mt-5 lg:mt-12 font-montrealRegular`}>
                        <h4 className="text-3xl 2xl:text-2xl lg:text-xl text-right sm:text-lg">SUPER DOGÃO</h4>
                        <p className="mt-10 lg:mt-6 2xl:text-xl xl:text-lg text-right sm:text-base mr-0">Identidade visual para um comércio de lanches, aplicada nas redes sociais. Isso inclui posts, stories e o cardápio. A nova identidade visa atrair clientes e fortalecer a marca, garantindo uniformidade e profissionalismo em todas as plataformas digitais.</p>
                        <p className="mt-10 lg:mt-6 2xl:text-xl xl:text-lg text-right sm:text-base mr-0">#content curation #art direction #copywriting #interaction design</p>
                    </motion.div>

                    <motion.img style={{y: lg}} src={textDecorationRight} className="2xl:h-80 lg:h-72 h-96 sm:h-64 sm:mt-1"/>
                </div>
                <motion.img src={superDogao} style={{y: lg}} className={styles.projetoImg}/>
            </div>
        </div>

    )
}

export default ProjetoRight