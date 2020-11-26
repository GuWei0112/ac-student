import React from 'react';

function WindowOperation() {
    function closeWindow() {
        window.close()
        // const remote = (window.require) ? window.require("electron").remote : null;
        // const WIN = remote.getCurrentWindow();
        // WIN.close();
    }

    function minimizeWindow() {
        // const remote = (window.require) ? window.require("electron").remote : null;
        // const WIN = remote.getCurrentWindow();
        // WIN.minimize();
        window.minimize()
    }

    return (
        <div className="Window-operations-container">
            <i className="far fa-window-minimize" style={{lineHeight: "10px"}} onClick={minimizeWindow}></i>
            <i className="fas fa-times close" onClick={closeWindow}></i>
        </div>
    );
}

export default WindowOperation;