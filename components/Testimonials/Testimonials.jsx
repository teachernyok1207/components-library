import React from "react"

export default function Testimonials({children}){
    return (
        <div className="cards-div">
            <p className="component-label">Testimonials</p>
            {children}
        </div>
    )
}