import tictactoe from '../assets/tictactoe.png';
import pinspiration from '../assets/pinspiration.png';
import pipeline from '../assets/pipeline.png';
import kickoffAnalysis from '../assets/kickoff-analysis.png';
import Cards from '../components/Cards';
import './New.css';

export default function New() {
    return (
        <>
            <div className='fp-tableCell'>
                <div className='project-wrapper'>
                    <h2 className="mb-2 text-2xl font-bold">Projects</h2>
                    <p className="font-light mb-2 max-w-lg opacity-70">Here are some projects I worked on at General Assembly.</p>
                    <div className="project-1">
                        <img src="https://fakeimg.pl/350x200" alt="" />
                        <h2>Project 1</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, velit corporis quisquam accusamus similique temporibus laborum nam maiores explicabo, </p>
                        <h2>View Project</h2>
                    </div>
                </div>
            </div>
        </>
    );
}
