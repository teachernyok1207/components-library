import React from "react"

export default function Banner({children}){
    return(
        <>  
            <p className="component-label">Banners</p>
            {children}
        </>
    )
}