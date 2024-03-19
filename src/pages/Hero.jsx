import { useMediaQuery } from 'react-responsive'
import Lottie from "lottie-react";
import HeroAnimation from "../assets/hero-animation.json"

export default function Hero() {

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' })

    return (
        <>
            {   isMobile && 
                <div id='hero' data-anchor="hero ">
                    <div className="fp-tableCell ">
                        <div className="grid grid-cols-1 gap-5 items-center w-full">
                            <div className="intro">
                                <h2 className="mb-2 text-2xl font-bold">Hello,<br />My name is Christian.</h2>
                                <p className="font-light mb-2 max-w-lg opacity-70">I am software engineer with a background in accounting.</p>
                                <p className="font-light mb-2 max-w-lg opacity-70">With an attention to detail, I enjoy creating solutions to improve application performance and user experience.</p>
                                <p className="font-light mb-2 max-w-lg opacity-70"></p>
                                <a className="cursor-pointer font-semibold underline" href="https://drive.google.com/file/d/1gHDGPrNgIq0ykIfKCDy3cU-TIetTHUNo/view?usp=sharing">View my Resume</a>
                            </div>
                            <div className="potrait-img max-w-lg relative w-10/12">
                                <Lottie animationData={HeroAnimation} />
                            </div>
                        </div>
                    </div>
                </div>
            }
            {   isDesktopOrLaptop &&
                <div id='hero' data-anchor="hero ">
                    <div className="fp-tableCell ">
                        <div className="grid grid-cols-2 gap-5 items-center w-full">
                            <div className="intro justify-self-end">
                                <h2 className="mb-2 text-2xl font-bold">Hello,<br />My name is Christian.</h2>
                                <p className="font-light mb-2 max-w-lg opacity-70">I am software engineer with a background in accounting.</p>
                                <p className="font-light mb-2 max-w-lg opacity-70">With an attention to detail, I enjoy creating solutions to improve application performance and user experience.</p>
                                <a className="cursor-pointer font-semibold underline" href="https://drive.google.com/file/d/1gHDGPrNgIq0ykIfKCDy3cU-TIetTHUNo/view?usp=sharing">View my Resume</a>
                            </div>
                            <div className="potrait-img max-w-lg relative w-10/12">
                                <Lottie animationData={HeroAnimation} />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}