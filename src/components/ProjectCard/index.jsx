import './index.css'

const ProjectCard = ({ item }) => {
    console.log(item)
    return (
        <div className="project-card">
            <img src={item.imageUrl} alt={item.projectTitle} className="project-image" />
            <div className='card-heading-container'>
                <h3 className='heading'>{item.projectTitle}</h3>
                <p className='duration'><span style={{ fontSize: "20px" }}>•</span>{item.duration}</p>
            </div>
            <p>{item.description}</p>
            <a href={item.projectUrl}>
                View Project
            </a>
        </div>
    )
}

export default ProjectCard;
