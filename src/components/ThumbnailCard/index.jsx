import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'

const ThumbnailCard = ({ item }) => {
    return (
        <li className="movie-thumbnail">
            <Popup
                modal
                trigger={
                    <img src={item.thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
                }
                className="popup-container"
            >
                {close => (
                    <div className="popup-video-container">
                        <button className="close-button" onClick={close}>
                            ✕
                        </button>
                        <iframe
                            width="100%"
                            height="400px"
                            src={item.videoUrl.replace("watch?v=", "embed/")}
                            title="YouTube video"
                            allowFullScreen
                        />
                    </div>
                )}
            </Popup>
        </li>
    )
}

export default ThumbnailCard
