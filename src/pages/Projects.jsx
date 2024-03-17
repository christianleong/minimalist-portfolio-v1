import './Projects.css'
import tictactoe from '../assets/tictactoe.png'
import pinspiration from '../assets/pinspiration.png'
import pipeline from '../assets/pipeline.png'
import kickoffAnalysis from '../assets/kickoff-analysis.png'
import { useMediaQuery } from 'react-responsive'

export default function Projects() {

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' })

    return (
        <>
        {
            isMobile &&        
            <div data-anchor="projects ">
                    <div className="projects-wrapper-mobile ">
                        <div className="grid grid-rows-1 gap-5 items-center w-full">
                            <div className="intro">
                                <h2 className="mb-2 text-2xl font-bold">Projects</h2>
                                <p className="font-light mb-2 max-w-lg opacity-70">Here are some projects I worked on at General Assembly.</p>
                            </div>
                            <div className="projects-grid-wrapper gap-14">
                                <div className="max-w-sm">
                                    <img src={tictactoe} alt="" className="rounded-lg w-full h-60 mb-5"/>
                                    <h2 className="mb-2 text-2xl font-bold">Tic-Tac-Toe</h2>
                                    <p className='font-light mb-2 max-w-lg opacity-70'>An interactive player vs player (PvP) game showcasing proficiency in front-end web development, featuring player input handling and dynamic styling.</p>
                                </div>
                                <div className="max-w-sm">
                                    <img src={pinspiration} alt="" className="rounded-lg w-full h-60 mb-5"/>
                                    <h2 className="mb-2 text-2xl font-bold">Pinspiration</h2>
                                    <p className='font-light mb-2 max-w-lg opacity-70'>A full-stack CRUD app that allows users to post, edit and delete their inspirations through captivating images. It also has signup and login features and the ability to allow users to search for images based on keywords in the title.</p>
                                    <p className='font-light mb-2 max-w-lg opacity-70'>Note: It may take a moment to load.</p>
                                </div>
                                <div className="max-w-sm">
                                    <img src={pipeline} alt="" className="rounded-lg w-full h-60 mb-5"/>
                                    <h2 className="mb-2 text-2xl font-bold">Pipeline</h2>
                                    <p className='font-light mb-2 max-w-lg opacity-70'>A full-stack single-page application that integrates with GoogleMaps API to display all petrol stations within the boundary based on current location.</p>
                                    <p className='font-light mb-2 max-w-lg opacity-70'>A collaborative effort involving four team members utilising GitHub branches and Trello board to delegate tasks and manage workflow.</p>
                                </div>
                                <div className="max-w-sm mb-20">
                                    <img src={kickoffAnalysis} alt="" className="rounded-lg w-full h-60 mb-5"/>
                                    <h2 className="mb-2 text-2xl font-bold">Kickoff Analysis</h2>
                                    <p className='font-light mb-2 max-w-lg opacity-70'>A single-page application built using React to display the English Premier League (EPL) football match fixtures, standings and team stats.</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        }
        
        {
            isDesktopOrLaptop &&        
            <div data-anchor="projects ">
                    <div className="projects-wrapper-desktop ">
                        <div className="grid grid-rows-1 gap-5 items-center w-full">
                            <div className="intro">
                                <h2 className="mb-2 text-2xl font-bold">Projects</h2>
                                <p className="font-light mb-2 max-w-lg opacity-70">Here are some projects I worked on at General Assembly.</p>
                            </div>
                            <div className="projects-grid-wrapper">
                                <div className="max-w-sm">
                                    <img src={tictactoe} alt="" className="rounded-lg w-full h-60 mb-5  mt-5"/>
                                    <h2 className="mb-2 text-2xl font-bold">Tic-Tac-Toe</h2>
                                    <p className='font-light mb-2 max-w-lg opacity-70'>An interactive player vs player (PvP) game showcasing proficiency in front-end web development, featuring player input handling and dynamic styling.</p>
                                </div>
                                <div className="max-w-sm">
                                    <img src={pinspiration} alt="" className="rounded-lg w-full h-60 mb-5 mt-5"/>
                                    <h2 className="mb-2 text-2xl font-bold">Pinspiration</h2>
                                    <p className='font-light mb-2 max-w-lg opacity-70'>A full-stack CRUD app that allows users to post, edit and delete their inspirations through captivating images. It also has signup and login features and the ability to allow users to search for images based on keywords in the title.</p>
                                    <p className='font-light mb-2 max-w-lg opacity-70'>Note: It may take a moment to load.</p>
                                </div>
                                <div className="max-w-sm">
                                    <img src={pipeline} alt="" className="rounded-lg w-full h-60 mb-5 mt-5"/>
                                    <h2 className="mb-2 text-2xl font-bold">Pipeline</h2>
                                    <p className='font-light mb-2 max-w-lg opacity-70'>A full-stack single-page application that integrates with GoogleMaps API to display all petrol stations within the boundary based on current location.</p>
                                    <p className='font-light mb-2 max-w-lg opacity-70'>A collaborative effort involving four team members utilising GitHub branches and Trello board to delegate tasks and manage workflow.</p>
                                </div>
                                <div className="max-w-sm">
                                    <img src={kickoffAnalysis} alt="" className="rounded-lg w-full h-60 mb-5 mt-5"/>
                                    <h2 className="mb-2 text-2xl font-bold">Kickoff Analysis</h2>
                                    <p className='font-light mb-2 max-w-lg opacity-70'>A single-page application built using React to display the English Premier League (EPL) football match fixtures, standings and team stats.</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        }
        </>
    )
}