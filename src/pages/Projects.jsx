import { useMediaQuery } from 'react-responsive';
import Carousel from '../components/Carousel';

export default function Projects({ screenHeight }) {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <div
            id={isMobile ? 'projects' : undefined}
            className={`p-0 table table-fixed w-full`}
            style={{
                height: isMobile ? '0' : `${screenHeight}px`
            }}
        >
            <div
                className={isMobile ? "fp-tableCell-mobile" : "fp-tableCell"}
                style={{ height: isMobile ? "0" : `${screenHeight}px` }}
            >
                <div className={`grid items-center w-full`}>
                    <div>
                        <h2 className="mb-2 text-2xl font-bold">Projects.</h2>
                        <p className="font-light mb-2 max-w-xl opacity-70">These are some highlight projects. Each page discusses the purpose of the project, what was learned, and how I came up with solutions.</p>
                        <Carousel />
                    </div>
                </div>
            </div>
        </div>
    );
}
