import React from "react";

const ContentContext = React.createContext({
    activeTabs: {
        content: true,
        leftNavbar: true,
        rightNavbar: true,
    },
    setActiveTabs: () => { }
});

export default ContentContext;
