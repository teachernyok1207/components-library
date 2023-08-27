import React from "react";
import Popup from "reactjs-popup";

export default function Tooltip({children}){
    return (
        <div className="tooltip-div">
            <p className="component-label">Tooltip</p>
            <Popup trigger={<button className="tooltip-button">Trigger Tooltip</button>} position="top left">
                {children}
            </Popup>
        </div>
    )
}