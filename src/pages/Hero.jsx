import portraitImage from '../assets/portrait-image.jpg'

export default function Hero() {
    return (
        <div data-anchor="hero ">
            <div className="fp-tableCell ">
                <div className="grid grid-cols-2 gap-5 items-center w-full">
                    <div className="intro justify-self-end">
                        <h2 className="mb-2 text-2xl font-bold">Hello,<br />My name is Christian.</h2>
                        <p className="font-light mb-2 max-w-lg">I am a software developer with a background in accounting. Web development has become my obsession and I am currently focusing on learning and building with React.</p>
                        <a className="cursor-pointer font-semibold underline" href="">View my Resume</a>
                    </div>
                    <div className="potrait-img max-w-lg relative w-10/12">
                        <img src={portraitImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}