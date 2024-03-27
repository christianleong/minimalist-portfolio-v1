// this component is used in the projects page
import Flickity from 'react-flickity-component'
import "./flickity.css";
import ProjectCard from './ProjectCard';

export default function Carousel() {
    
    const flickityOptions = {
        contain: true,
        groupCells: true, 
        cellAlign: 'left', // to align the carousel to the left, instead of the center
        draggable: '>1' // allow user to drag and move the carousel
    };   
    
    return (
        <Flickity
            className={'carousel mt-7'} // default ''
            elementType={'div'} // default 'div'
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
            options={flickityOptions} // pass the options here
        >
            <ProjectCard />
            <div></div> {/* empty div to resolve console error because Flickity is expecting an array of children */}
        </Flickity>
    )
}
