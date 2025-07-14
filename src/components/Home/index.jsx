import { useState } from "react"
import Footer from "../Footer"
import Header from "../Header"
import LeftNavbar from "../LeftNavbar"
import RightNavbar from "../RightNavbar"
import Content from "../Content"
import ContentContext from "../ContentContext"
import "./index.css"

const Home = () => {
    const [activeTabs, setActiveTabs] = useState({
        content: true,
        leftNavbar: true,
        rightNavbar: true
    });

    const handleChange = (event) => {
        const { id, checked } = event.target;
        console.log(event.target)
        setActiveTabs(prev => ({
            ...prev,
            [id]: checked
        }));
    };

    return (
        <ContentContext.Provider value={{ activeTabs, setActiveTabs }}>
            <div className="home-container">
                <div className="layout-container">
                    <h1>Layout</h1>
                    <div className="selection-feild">
                        <div>
                            <input id="content" type="checkbox" checked={activeTabs.content} onChange={handleChange} />
                            <label htmlFor="content">Content</label>
                        </div>
                        <div>
                            <input id="leftNavbar" type="checkbox" checked={activeTabs.leftNavbar} onChange={handleChange} />
                            <label htmlFor="leftNavbar">Left Navbar</label>
                        </div>
                        <div>
                            <input id="rightNavbar" type="checkbox" checked={activeTabs.rightNavbar} onChange={handleChange} />
                            <label htmlFor="rightNavbar">Right Navbar</label>
                        </div>
                    </div>
                </div>
                <Header />
                <div className="main-section">
                    {activeTabs.leftNavbar && <LeftNavbar />}
                    {activeTabs.content && <Content />}
                    {activeTabs.rightNavbar && <RightNavbar />}
                </div>
                <Footer />
            </div>
        </ContentContext.Provider>
    )
}

export default Home
