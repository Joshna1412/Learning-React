import { useContext } from "react"
import ContentContext from "../ContentContext"
import "./index.css"

const Content = () => {
    const { activeTabs } = useContext(ContentContext);

    return (
        activeTabs.content && (
            <div className='content-container'>
                <h3 className='content-heading'>Content</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
        )
    )
}

export default Content
