import './index.css'

const CourseCard = ({ item }) => {
    console.log(item)
    return <div className="course-card">
        <div className='card-heading-container'>
            <h3 className='heading'>{item.courseTitle}</h3>
            <p className='duration'><span style={{ fontSize: "20px" }}>•</span>{item.duration}</p>
        </div>
        <p>{item.description}</p>
        <ul className='tags-container'>
            {item.tagsList.map(tag => (
                <li key={tag.id} className='tag-name'>{tag.name}</li>
            ))}
        </ul>
    </div>
}

export default CourseCard;
