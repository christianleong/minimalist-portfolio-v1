import './Projects.css'
import tictactoe from '../assets/tictactoe.png'

export default function Projects() {
    return (
       <div data-anchor="projects ">
            <div className="fp-tableCell ">
                <div className="grid grid-rows-1 gap-5 items-center w-full">
                    <div className="intro">
                        <h2 className="mb-2 text-2xl font-bold">Projects</h2>
                        <p className="font-light mb-2 max-w-lg">Here are some of the projects I worked on at General Assembly.</p>
                    </div>
                    <div className="projects-grid-wrapper">
                        <div className="max-w-sm">
                            <img src={tictactoe} alt="" className="rounded-lg w-full"/>
                            <h2 className="mb-2 text-2xl font-bold">Tic-Tac-Toe</h2>
                            <p>An interactive player vs player (PvP) game showcasing proficiency in front-end web development, featuring player input handling and dynamic styling.</p>
                        </div>
                        <div className="max-w-sm">
                            <img src="https://fakeimg.pl/350x233" alt="" className="rounded-lg w-full"/>
                            <h2 className="mb-2 text-2xl font-bold">Project 2</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia eos ea aspernatur in vitae quidem enim voluptatem ducimus asperiores</p>
                        </div>
                        <div className="max-w-sm">
                            <img src="https://fakeimg.pl/350x233" alt="" className="rounded-lg w-full"/>
                            <h2 className="mb-2 text-2xl font-bold">Project 3</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia eos ea aspernatur in vitae quidem enim voluptatem ducimus asperiores</p>
                        </div>
                        <div className="max-w-sm">
                            <img src="https://fakeimg.pl/350x233" alt="" className="rounded-lg w-full"/>
                            <h2 className="mb-2 text-2xl font-bold">Project 4</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia eos ea aspernatur in vitae quidem enim voluptatem ducimus asperiores</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}