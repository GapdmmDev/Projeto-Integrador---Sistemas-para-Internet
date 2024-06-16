import {motion} from "framer-motion"
import {useRef, useState} from "react"

export default function FramerMagnet({children}) {

    const ref = useRef(null)
    const [position, setPosition] = useState({x: 0, y: 0})

    const mouseMove = (e) => {
        const {clientX, clientY} = e
        const {width, height, left, top} = ref.current.getBoundingClientRect()
        const x = clientX - (left + width / 2)
        const y = clientY - (top + height / 2)
        const distance = Math.sqrt(x * x + y * y)
        const maxDistance = 50

        if (distance < maxDistance) {
            setPosition({x, y})
        } else {
            setPosition({x: 0, y: 0})
        }
    }
    
    const mouseLeave = (e) => {
        setPosition({x: 0, y: 0})
    }

    const {x, y} = position

    return (
        <motion.div
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            ref={ref}
            animate={{x, y}}
            transition={{type: "spring", stiffness: 50, damping: 10, mass: 0.5}}
        >
            {children}
        </motion.div>
    )
}
