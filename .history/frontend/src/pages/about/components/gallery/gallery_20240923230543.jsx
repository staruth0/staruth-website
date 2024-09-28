import React from "react";
import './gallery.css'
import teamguy from '../../../../../../assets/images/teamguy.jpeg'
const GalleryComponent=()=>{
    return(
        <div className="galleryimg">
            <img src={teamguy} alt="ga" />
        </div>
    )
}