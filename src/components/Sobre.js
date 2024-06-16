import { Element } from "react-scroll";
import portrait from "../assets/img/portrait-carol.svg"

function Sobre() {
    return (

        
            <section className={`w-screen h-screen flex items-center justify-center overflow-x-hidden`} style={{backgroundColor: "#1D1F22"}}>
                <Element name="Sobre" className="h-full flex justify-center items-center">
                <div className="flex justify-around w-full md:w-9/12 xl:flex-col xl:items-center xl:space-y-10">
                    <div className="flex flex-col justify-between items-center">
                    <h2 className="text-7xl w-96 ml-48 2xl:text-6xl xl:ml-0 xl:text-center md:text-5xl text-white">SOBRE</h2>
                    <img src={portrait} className="w-96" alt="" />
                    </div>
                    
                    <p className="text-2xl flex items-center mr-48 mb-0 2xl:text-xl xl:mr-0 text-start md:text-lg sm:text-base text-white font-montrealRegular font-light">Olá, eu sou a Caroline Heitzman, e vou contar um pouco sobre mim! Eu tenho 21 anos e atualmente estou cursando design gráfico na universidade. Minha paixão pelo design é mais do que apenas uma profissão, é uma forma de expressar minha criatividade.<br /><br />Cada projeto que crio é uma parte de mim, uma narrativa visual que conta uma história única. Acredito firmemente que o design gráfico é uma poderosa ferramenta de comunicação, capaz de conectar pessoas e ideias de maneiras inesperadas. Estou sempre em busca de novos desafios e oportunidades para deixar minha marca no mundo. Vamos criar algo incrível juntos!
                    </p>
                </div>
                </Element>
            </section>
       

    )
}

export default Sobre