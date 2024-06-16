import Logo from "../assets/img/logo.svg"
import instagram from "../assets/img/instagram.svg"
import tiktok from "../assets/img/tiktok.svg"
import linkedin from "../assets/img/linkedin.svg"
import { Link, Element } from "react-scroll"

function Footer() {
    return (

        <Element name="Footer">
            <footer className="text-white text-2xl xl:text-xl font-montserrat font-light flex flex-col justify-between" style={{ height: "70vh", backgroundColor: "#1D1F22", width: "100vw" }}>

                <div className="footerLinks flex justify-around mt-48 md:flex-col md:items-center md:space-y-6 md:mt-10">
                    <div className="links w-96">
                        <h5 className="text-center font-semibold pb-5">Links</h5>
                        <ul className="flex flex-col items-start ml-36 xl:ml-0 xl:items-center">

                            <Link to="Home" smooth={true} duration={700}>
                                <li className="cursor-pointer">Home</li>
                            </Link>

                            <Link to="Sobre" smooth={true} duration={700}>
                                <li className="cursor-pointer">Sobre</li>
                            </Link>

                            <Link to="Projetos" smooth={true} duration={700}>
                                <li className="cursor-pointer">Projetos</li>
                            </Link>

                        </ul>
                    </div>
                    <div className="servicos w-96">
                        <h5 className="text-center font-semibold pb-5">Serviços</h5>
                        <ul className="flex flex-col items-start ml-24 xl:ml-0 xl:items-center">
                            <li>Identidade Visual</li>
                            <li>Criação de peças</li>
                            <li>Ilustração</li>
                            <li>Briefing</li>
                        </ul>
                    </div>
                    <div className="contato w-96">
                        <h5 className="text-center font-semibold pb-5">Contato</h5>
                        <ul className="flex flex-col items-start ml-16 xl:ml-0 xl:items-center">
                            <li className="cursor-pointer">+55 12 98298 - 1370</li>
                            <li className="cursor-pointer">heitzmanzita@gmail.com</li>
                        </ul>
                    </div>
                </div>

                <div className="logos flex justify-around mb-6 items-center">
                    <div className="logo w-96 flex justify-center"><img src={Logo} alt="Logotipo CaHeitz" className="sm:h-14" /></div>
                    <div className="copyright text-center w-96 sm:text-lg">© Ca Heitz 2024</div>
                    <div className="socialMedia flex space-x-5 w-96 justify-center">
                        <a href="https://www.instagram.com/caa.otica/" target="blank"><img src={instagram} className="w-8 xl:w-6 sm:w-5" alt="Rede social Instagram" /></a>
                        <a href="https://www.tiktok.com/@caa.otica?_t=8mvNJ8dFVQ5&_r=1" target="blank"><img src={tiktok} className="w-8 xl:w-6 sm:w-5" alt="Rede social TikTok" /></a>
                        <a href="https://www.linkedin.com/in/caroline-heitzman-de-oliveira-473476231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank"><img src={linkedin} className="w-8 xl:w-6 sm:w-5" alt="Rede social Linkedin" /></a>
                        
                        
                        
                    </div>
                </div>
            </footer>
        </Element>

    )
}

export default Footer