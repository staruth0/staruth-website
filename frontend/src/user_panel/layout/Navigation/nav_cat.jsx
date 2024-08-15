import React from "react";

const NavCategories = ({data}) => {

    return (
        <div className="nav-product-menu-category">
            <div className="category-image-container">
                <img
                    src={data.url}
                    alt={data.name}
                    className="category-image"
                />
            </div>
            <div className="category-details">
                <h3 className="category-name">{data.name}</h3>
                <div className="short-category-description">
                    {data.desc}
                </div>
            </div>
        </div>
    )
}

export default NavCategories;
