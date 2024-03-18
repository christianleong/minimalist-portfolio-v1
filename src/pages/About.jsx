import portraitImage from '../assets/portrait-image.jpg'

export default function About() {
    return (
        <div data-anchor="about ">
            <div className="fp-tableCell ">
                <div className="grid grid-cols-2 gap-5 items-center w-full">
                    <div className="intro justify-self-end">
                        <h2 className="mb-2 text-2xl font-bold">About.</h2>
                        <p className="font-light mb-2 max-w-lg">I’m a Melbourne-based junior full-stack software engineer with 5 years of experience in tax accounting and a qualified Chartered Accountant.</p>
                        <p className="font-light mb-2 max-w-lg">I have recently completed a 12-week Software Engineering Immersive Bootcamp, and I’m eager to leverage my problem-solving abilities, communication skills and adaptability, in tackling new challenges and providing solutions both in front-end and back-end development. I'm thrilled about the opportunities ahead and eager to absorb knowledge and contribute in a collaborative team environment.</p>
                        <p className="font-light mb-2 max-w-lg">Outside of coding, I am a competitive ultimate frisbee player, an amateur home cook, and a gaming enthusiast.</p>
                        <p className="font-light mb-2 max-w-lg">I am always interested in meeting new people in the industry so please feel free to connect!</p>
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