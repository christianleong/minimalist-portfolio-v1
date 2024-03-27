// this component is used in the ProjectCard page
export default function ProjectCardItem({ project, onMouseEnter, onMouseLeave, hoveredIndex, idx }) {

    const isHovered = hoveredIndex === idx;

    return (
        <div 
            className="absolute left-0 w-full max-w-md mr-10 card" 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <a href={project.demoUrl}>
                <div className="relative cursor-pointer rounded-md">
                    <div className="relative overflow-hidden rounded-md h-72">
                        <div className='w-full' style={{ paddingBottom: "75%" }}></div>
                        <img 
                            src={project.img} 
                            alt={project.title} 
                            className={`absolute top-0 left-0 w-full h-full object-cover object-center ${isHovered ? "transform scale-110" : ""}`}
                            style={{ transition: "all 1s ease" }}
                        />
                    </div>

                    <div className={`absolute w-full h-full top-0 justify-center rounded items-center flex bg-black ${isHovered ? "opacity-60" : "opacity-0"}`} style={{ transition: "all 1s ease" }}>
                        <div className={`text-center ${isHovered ? "opacity-100" : "opacity-0"}`} style={{ width: "70%" }}>
                            {project.techStack.map((tech, idx) => 
                                <div 
                                    key={idx} 
                                    className="bg-transparent text-white font-medium inline-block rounded-full mr-2 mb-2" 
                                    style={{ 
                                        fontSize: ".7em", 
                                        border: "2px solid #fff", 
                                        padding: "0.2em 1em", 
                                        transition: "all .1s ease" 
                                    }}
                                >
                                    {tech}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </a>

            <h3 className="cursor-pointer text-xl font-bold" style={{ marginTop: "1em" }}>
                <a href={project.githubUrl}>{project.title}</a>
            </h3>

            <div className="font-light" style={{ margin: "0.6em auto" }}>{project.description}</div>
            
            <a className="font-medium cursor-pointer" href={project.githubUrl}>VIEW GITHUB</a>
        </div>
    );
}
