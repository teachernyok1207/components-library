import React from "react"

export default function BannerSingleLine({ theme }){
    return(
        <div className="banners-div">
            {theme.map(
                item => (
                    <div className={`banners ${item.color}`} key={item.theme}>
                        <div className="banner-heading">
                            <i className={item.icon}></i>
                            <span className="banner-title">{item.title}</span>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}