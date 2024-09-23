import React from "react";
import './gallery.css'
import teamguy from '../../../../assets/images/teamguy.jpeg'
const GalleryComponent=()=>{
    return(
        <div className="container">
        <div className="galleryimg">
            <img src={teamguy} alt="gallery img" />
        </div>
        <div className="galleryimg">
            <img src={teamguy} alt="gallery img" />
        </div>
        <div className="galleryimg">
            <img src={teamguy} alt="gallery img" />
        </div>
        </div>
    );
};
export default GalleryComponent;