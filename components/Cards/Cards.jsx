import React from "react"

export default function Cards({ children }){
    return(
        <div className="cards-div">
            <p className="component-label">Cards</p>
            {children}
        </div>
    )
}