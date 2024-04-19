import { useMediaQuery } from 'react-responsive';
import Lottie from "lottie-react";
import HeroAnimation from "../assets/hero-animation.json";

export default function Home({ screenHeight }) {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <div 
            id={isMobile ? 'home' : undefined}
            className="p-0 table table-fixed w-full" 
            style={{ 
                marginTop: isMobile ? '50px' : "" , 
                height: isMobile ? '' : `${screenHeight}px` 
            }}
        >

            <div 
                className={ isMobile ? "fp-tableCell-mobile" : "fp-tableCell" } 
                style={{ height: isMobile? "0" :`${screenHeight}px` }}
            >

                <div className={`grid ${ isMobile ? 'grid-cols-1' : 'grid-cols-2' } gap-5 items-center w-full`}>

                    <div className={`${ isMobile ? '' : 'justify-self-end' }`}>
                        <h2 className="mb-2 text-2xl font-bold">Hello,</h2>
                        <h2 className="mb-2 text-2xl font-bold animate-typing overflow-hidden whitespace-nowrap">My name is Christian.</h2>
                        <p className="font-light mb-2 max-w-lg opacity-70">I am a software engineer with a background in accounting.</p>
                        <p className="font-light mb-2 max-w-lg opacity-70">With attention to detail, I enjoy creating solutions to improve application performance and user experience.</p>
                        <a className="cursor-pointer font-semibold underline" href="https://drive.google.com/file/d/1P9UV_nNPdRguJJPn-rR5lWlAld89cNMT/view?usp=sharing" target="_blank">View my Resume</a>
                    </div>
                    
                    <div className={`max-w-lg relative w-10/12 `}>
                        <Lottie animationData={HeroAnimation} />
                    </div>

                </div>

            </div>

        </div>
    );
}
