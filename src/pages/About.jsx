import { useMediaQuery } from 'react-responsive';
import portraitImage from '../assets/portrait-image.jpg';

export default function About({ screenHeight }) {
    
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const gridColsClass = isMobile ? 'grid-cols-1' : 'grid-cols-2';

    return (
        <div 
            id={isMobile ? 'about' : undefined}
            className="p-0 table table-fixed w-full" 
            style={{ 
                height: isMobile ? '0' : `${screenHeight}px` 
            }}>

            <div 
                className={ isMobile ? "fp-tableCell-mobile" : "fp-tableCell" } 
                style={{ height: isMobile? "0" :`${screenHeight}px` }}
            >

                <div className={`grid ${gridColsClass} gap-5 items-center w-full`}>

                    <div className={isMobile ? 'intro' : 'intro justify-self-end'}>
                        <h2 className="mb-2 text-2xl font-bold">About.</h2>
                        <p className="font-light mb-2 max-w-lg opacity-70">I’m a Melbourne-based junior full-stack software engineer with 5 years of experience in tax accounting and a qualified Chartered Accountant.</p>
                        <p className="font-light mb-2 max-w-lg opacity-70">I have recently completed a 12-week Software Engineering Immersive Bootcamp, and I’m eager to leverage my problem-solving abilities, communication skills and adaptability, in tackling new challenges and providing solutions both in front-end and back-end development. I'm thrilled about the opportunities ahead and eager to absorb knowledge and contribute in a collaborative team environment.</p>
                        <p className="font-light mb-2 max-w-lg opacity-70">Outside of coding, I am a competitive ultimate frisbee player, an amateur home cook, and a gaming enthusiast.</p>
                        <p className="font-light mb-2 max-w-lg opacity-70">I am always interested in meeting new people in the industry so please feel free to connect!</p>
                    </div>

                    <div className="potrait-img max-w-lg relative w-10/12">
                        <img src={portraitImage} alt="portrait-image" />
                    </div>

                </div>

            </div>

        </div>
    );
}
