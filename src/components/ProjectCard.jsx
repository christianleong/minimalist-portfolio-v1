// this component is used in the Carousel component
import { useState } from 'react';
import ProjectCardItem from './ProjectCardItem';
import tictactoe from '../assets/images/tictactoe.png';
import pinspiration from '../assets/images/pinspiration.png'
import pipeline from '../assets/images/pipeline.png'
import kickoffAnalysis from '../assets/images/kickoff-analysis.png'

export default function ProjectCard() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (idx) => {
        setHoveredIndex(idx);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const projects = [
        {
            demoUrl: "https://christianleong.github.io/tic-tac-toe/",
            img: tictactoe,
            title: "Tic-Tac-Toe",
            description: "An interactive player vs player (PvP) game showcasing proficiency in front-end web development, featuring player input handling and dynamic styling.",
            techStack: ["HTML", "CSS", "JavaScript"],
            githubUrl: "https://github.com/christianleong/tic-tac-toe"
        },
        {
            demoUrl: "https://pinspiration-r3vl.onrender.com",
            img: pinspiration,
            title: "Pinspiration",
            description: "A full-stack CRUD app that allows users to post, edit and delete their inspirations through captivating images. It also has signup and login features and the ability to allow users to search for images based on keywords in the title. Note: It may take a moment to load.",
            techStack: ["HTML", "CSS", "JavaScript", "Express.js", "Node.js", "PostgreSQL"],
            githubUrl: "https://github.com/christianleong/pinspiration"
        },
        {
            demoUrl: "https://github.com/yangzhie/pipeline",
            img: pipeline,
            title: "Pipeline",
            description: "A full-stack single-page application that integrates with GoogleMaps API to display all petrol stations within the boundary based on current location. A collaborative effort involving four team members utilising GitHub branches and Trello board to delegate tasks and manage workflow.",
            techStack: ["HTML", "CSS", "JavaScript", "Express.js", "Node.js", "PostgreSQL", "API"],
            githubUrl: "https://github.com/yangzhie/pipeline"
        },
        {
            demoUrl: "https://kickoff-analysis.surge.sh/",
            img: kickoffAnalysis,
            title: "Kickoff Analysis",
            description: "A single-page application built using React to display the English Premier League (EPL) football match fixtures, standings and team stats.",
            techStack: ["HTML", "CSS", "JavaScript", "Express.js", "Node.js", "React.js", "API", "Tailwind CSS"],
            githubUrl: "https://github.com/christianleong/react-kickoff-analysis"
        }
    ];

    return (
        <>
            {projects.map((project, idx) => (
                <ProjectCardItem 
                    key={idx} 
                    idx={idx}
                    project={project} 
                    onMouseEnter={() => handleMouseEnter(idx)} 
                    onMouseLeave={handleMouseLeave}
                    hoveredIndex={hoveredIndex}
                />
            ))}
        </>
    );
}
