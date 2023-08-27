import React from "react"

export default function BadgesPill({color, badgeStyle}){
    return(
        <div className="badge-div">
            {color.map(
                item => (
                    <div className={`badges ${item} ${badgeStyle}`} key={item}>
                        {item}
                    </div>
                )
            )}
        </div>
    )
}