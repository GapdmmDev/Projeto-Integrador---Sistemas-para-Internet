import styles from "./Projetos.module.css"
import textDecorationRight from "../assets/img/text-decoration-right.svg"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import ProjetoLeftOne from "./ProjetoLeftOne"
import ProjetoLeftTwo from "./ProjetoLeftTwo"
import ProjetoRight from "./ProjetoRight"
import { Element } from "react-scroll"

function Projetos() {

    const container = useRef()
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })


    return (

        <Element name="Projetos">
            <section className={`${styles.projetos} h-max w-screen overflow-x-hidden`}>

                <div ref={container} className="w-full">
                    <Slider left="-55%" progress={scrollYProgress} />
                </div>

                <ProjetoLeftOne />

                <ProjetoRight />

                <ProjetoLeftTwo />


            </section>
        </Element>

    )
}

const Slider = ({ left, progress }) => {

    const x = useTransform(progress, [0, 1], [-250, 250])

    return (
        <motion.div className="flex whitespace-nowrap relative" style={{ left, x, color: "#353535" }}>
            <h3 className="text-9xl 2xl:text-8xl xl:text-7xl">PROJETOS REALIZADOS •&nbsp;</h3>
            <h3 className="text-9xl 2xl:text-8xl xl:text-7xl">PROJETOS REALIZADOS •&nbsp;</h3>
            <h3 className="text-9xl 2xl:text-8xl xl:text-7xl">PROJETOS REALIZADOS •&nbsp;</h3>
            <h3 className="text-9xl 2xl:text-8xl xl:text-7xl">PROJETOS REALIZADOS •&nbsp;</h3>
        </motion.div>
    )
}



export default Projetos