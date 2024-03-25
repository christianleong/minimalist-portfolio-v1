import { useMediaQuery } from 'react-responsive'
import Lottie from "lottie-react";
import HeroAnimation from "../assets/hero-animation.json"

export default function Hero({ screenHeight }) {

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
    const gridColsClass = isMobile ? 'grid-cols-1' : 'grid-cols-2' // Question: should I do the same for the other ternary operators?

    return (
        <div 
            id={isMobile ? 'home' : undefined}
            className="p-0 table table-fixed w-full" 
            style={{ 
                marginTop: isMobile ? '50px' : "0" , 
                height: isMobile ? '0' : `${screenHeight}px` 
            }}
        >

            <div 
                className={ isMobile ? "fp-tableCell-mobile" : "fp-tableCell" } 
                style={{ height: isMobile? "0" :`${screenHeight}px` }}
            >

                <div className={`grid ${ gridColsClass } gap-5 items-center w-full`}>

                    <div className={`intro ${ isMobile ? '' : 'justify-self-end' }`}>
                        <h2 className="mb-2 text-2xl font-bold">Hello,<br />My name is Christian.</h2>
                        <p className="font-light mb-2 max-w-lg opacity-70">I am software engineer with a background in accounting.</p>
                        <p className="font-light mb-2 max-w-lg opacity-70">With an attention to detail, I enjoy creating solutions to improve application performance and user experience.</p>
                        <a className="cursor-pointer font-semibold underline" href="https://drive.google.com/file/d/1gHDGPrNgIq0ykIfKCDy3cU-TIetTHUNo/view?usp=sharing">View my Resume</a>
                    </div>
                    
                    <div className={`potrait-img max-w-lg relative w-10/12 `}>
                        <Lottie animationData={HeroAnimation} />
                    </div>

                </div>

            </div>

        </div>
    )
}