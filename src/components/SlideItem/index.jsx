import './index.css'

const SlideItem = ({ item }) => {
    return (
        <div className='slide-container'>
            <img src={item.imageUrl} alt={item.name} className="planet-img" />
            <h1>{item.name}</h1>
            <p>{item.description}</p>
        </div>
    )
}

export default SlideItem
