import { useScroll, useTransform, motion } from "framer-motion"
import { useRef, useState } from "react"
import textDecoration from "../assets/img/text-decoration.svg"
import styles from "./Projetos.module.css"
import neoOdonto from "../assets/img/neo-odonto.svg"

function ProjetoLeftTwo(){

    const container = useRef(null)
    const {scrollYProgress} = useScroll({
        target: container.current,
        offset: ['start end', 'end start'] 
    })

    const sm = useTransform(scrollYProgress, [0, 1], [-500, -50])
    const md = useTransform(scrollYProgress, [0, 1], [0, -150])
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250])

    return(
        <div ref={container}>
            <div className={`${styles.containerProjetos}w-screen p-72 sm:p-0 sm:pt-48 flex md:flex-col md:items-center justify-center`}>
                <motion.img src={neoOdonto} style={{y: sm}} className={styles.projetoImg}/>
                <div className="flex items-center justify-center ml-48 xl:ml-24 md:w-screen md:ml-0">
                    <motion.img style={{y: sm}} src={textDecoration} className="2xl:h-80 lg:h-72 h-96 sm:h-64 sm:mt-1"/>
                    <motion.div style={{y: sm}} className={`${styles.textProjetos} mb-14 ml-5 2xl:mt-14 xl:mt-20 font-montrealRegular`}>
                        <h4 className="text-3xl 2xl:text-2xl lg:text-xl sm:text-lg font-montrealMedium" style={{color: "#353535"}}>NEO ODONTO</h4>
                        <p className="mt-10 lg:mt-6 2xl:text-xl xl:text-lg lg:text-left sm:text-base">Para a Neodonto, desenvolvi uma identidade visual utilizada nas redes sociais da clínica e no estabelecimento. Isso inclui certificados personalizados para os pacientes do setor infantil, reforçando a marca de forma coesa e profissional.</p>
                        <p className="mt-10 lg:mt-6 2xl:text-xl xl:text-lg lg:text-left sm:text-base">#content curation #art direction #copywriting #interaction design</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ProjetoLeftTwo