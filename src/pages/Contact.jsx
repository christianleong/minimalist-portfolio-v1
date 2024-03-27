import linkedinIcon from '../assets/iconmonstr-linkedin-3.svg'
import githubIcon from '../assets/iconmonstr-github-1.svg'
import { useMediaQuery } from 'react-responsive'

export default function Contact({ screenHeight }) {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <div 
            id={isMobile ? 'contact' : undefined}
            className="p-0 table table-fixed w-full" 
            style={{ 
                height: isMobile ? '' : `${screenHeight}px` 
            }}
        >
            <div 
                className={ isMobile ? "fp-tableCell-mobile" : "fp-tableCell" } 
                style={{ height: isMobile ? "" : `${screenHeight}px` }}
            >
                <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-5 items-center w-full`}>
                    <div className={`${isMobile ? '' : 'justify-self-end'}`}>

                        <h2 className="mb-2 text-2xl font-bold">Contact.</h2>
                        <p className="font-light mb-2 max-w-lg opacity-70">I am currently looking for new opportunities. If you're looking for someone to join your project or just want to say hello, feel free to drop me a message!</p>
                        <p className='mb-6'>
                            <a className="cursor-pointer font-semibold underline" href="mailto:christianleong@gmail.com">christianleong@gmail.com</a>
                        </p>

                        {/* social links */}
                        <div className='flex justify-between w-20'>
                            <a href="https://www.linkedin.com/in/christianleong/"><img src={linkedinIcon} alt="" /></a>
                            <a href="https://github.com/christianleong"><img src={githubIcon} alt="" /></a>
                        </div>

                        {/* footer credits */}
                        <div className={`${isMobile ? "relative mt-20" : "absolute bottom-12" } left-1/2 transform -translate-x-1/2 text-center font-light text-sm`}>
                            <p className='mb-1'>Created by me © 2024.</p>
                            <p>Designed by <a href="https://auspham.dev/">Austin Pham</a></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
