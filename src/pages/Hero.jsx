import portraitImage from '../assets/portrait-image.jpg'
import { useMediaQuery } from 'react-responsive'

export default function Hero() {

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' })

    return (
        <>
            {   isMobile && 
                <div data-anchor="hero ">
                    <div className="fp-tableCell ">
                        <div className="grid grid-cols-1 gap-5 items-center w-full">
                            <div className="intro">
                                <h2 className="mb-2 text-2xl font-bold">Hello,<br />My name is Christian.</h2>
                                <p className="font-light mb-2 max-w-lg opacity-70">I'm a recent graduate at RMIT University, majored in Computer Science.</p>
                                <p className="font-light mb-2 max-w-lg opacity-70">My areas of interest include problem-solving, cloud infrastructure, machine learning, and IoT.</p>
                                <p className="font-light mb-2 max-w-lg opacity-70">With a detail oriented-focus, I enjoy creating simple but effective solutions to improve application performance, ease of maintenance, and user experience.</p>
                                <a className="cursor-pointer font-semibold underline" href="">View my Resume</a>
                            </div>
                            <div className="potrait-img max-w-lg relative w-10/12">
                                <img src={portraitImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            }
            {   isDesktopOrLaptop &&
                <div data-anchor="hero ">
                    <div className="fp-tableCell ">
                        <div className="grid grid-cols-2 gap-5 items-center w-full">
                            <div className="intro justify-self-end">
                                <h2 className="mb-2 text-2xl font-bold">Hello,<br />My name is Christian.</h2>
                                <p className="font-light mb-2 max-w-lg opacity-70">I'm a recent graduate at RMIT University, majored in Computer Science.</p>
                                <p className="font-light mb-2 max-w-lg opacity-70">My areas of interest include problem-solving, cloud infrastructure, machine learning, and IoT.</p>
                                <p className="font-light mb-2 max-w-lg opacity-70">With a detail oriented-focus, I enjoy creating simple but effective solutions to improve application performance, ease of maintenance, and user experience.</p>
                                <a className="cursor-pointer font-semibold underline" href="">View my Resume</a>
                            </div>
                            <div className="potrait-img max-w-lg relative w-10/12">
                                <img src={portraitImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}