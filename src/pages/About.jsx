import portraitImage from '../assets/portrait-image.jpg'

export default function About() {
    return (
        <div data-anchor="about ">
            <div className="fp-tableCell ">
                <div className="grid grid-cols-2 gap-5 items-center w-full">
                    <div className="intro justify-self-end">
                        <h2 className="mb-2 text-2xl font-bold">About.</h2>
                        <p className="font-light mb-2 max-w-lg">Hi! My name is Christian, I love the internet and building things for it. My interest in development started many years ago, though it never became a part of my career until now. I have dabled in development from time to time for my own needs and out of pure interest.</p>
                        <p className="font-light mb-2 max-w-lg">I have a background in engineering where I developed a love for coding, I have also started two businesses where I developed a love for business and solving clients problems. It turns out that web development is a perfect sweet spot!</p>
                        <p className="font-light mb-2 max-w-lg">Right now, I am seeking an entry/junior role in web development, particularly in front-end where I can bring designs to life.</p>
                        {/* <p className="font-light mb-2 max-w-lg">Here are a few technologies I have been working with recently:</p> */}
                    </div>
                    {/* <div className="potrait-img max-w-lg relative w-10/12">
                        <img src={"https://fakeimg.pl/500x500"} alt="" />
                    </div> */}
                </div>
            </div>
        </div>
    )
}