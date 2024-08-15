import { NavLink, Link } from 'react-router-dom';
// pictures
import dashboard from '../assets/icons/Control Panel.svg';
import orders from '../assets/icons/Control Panel.svg';
import customers from '../assets/icons/People.svg';
import analytics from '../assets/icons/Graph.svg';
import content from '../assets/icons/Content.svg';
import reviews from '../assets/icons/Popular.svg';
import promotions from '../assets/icons/Discount.svg';
import shoppingBag from '../assets/icons/Shopping Bag Full.svg';
import dropdown from '../assets/icons/Expand Arrow.svg';
import { useState } from 'react';
const Sidebar = ({ displaySidebar, toggleSidebar }) => {
  const [active, setActive] = useState(null);
  const [displayDropdown, setDisplayDropdown] = useState(true);

  const toggleActiveIndex = (index) => {
    if (index === active) {
      setDisplayDropdown(!displayDropdown);
      setActive(null);
      return;
    } else {
      setDisplayDropdown(true);
    }
    setActive(index);
  };
  return (
    <div className={`jim sidebar ${displaySidebar === true ? 'active' : ''}`}>
      <ul className="sidebar-menu">
        {/* dashboard */}
        <li>
          <Link
            to="/admin"
            className={active === 1 ? 'active' : ''}
            onClick={() => {
              toggleSidebar();
              toggleActiveIndex(1);
            }}
          >
            <div>
              <img src={dashboard} alt="" />
              <span>Dashboard</span>
            </div>
          </Link>
        </li>
        {/* products */}
        <li>
          <button
            className={active === 2 ? 'active' : ''}
            onClick={() => {
              toggleActiveIndex(2);
            }}
          >
            <div>
              <img src={shoppingBag} alt="" />
              <span>Products</span>
            </div>
            <img
              className={`chevron-down ${
                displayDropdown === false ? 'rotate' : ''
              }`}
              src={dropdown}
              alt=""
            />
          </button>
          <div
            className={`drop-down ${
              active === 2 && displayDropdown === true ? 'active' : ''
            }`}
          >
            <NavLink
              to="products/all"
              onClick={() => {
                toggleSidebar();
              }}
            >
              All Products
            </NavLink>
            <NavLink
              to="products/categories"
              onClick={() => {
                toggleSidebar();
              }}
            >
              Product Categories
            </NavLink>
            <NavLink
              to="products/add"
              onClick={() => {
                toggleSidebar();
              }}
            >
              Add Product
            </NavLink>
          </div>
        </li>
        {/* Orders */}
        <li>
          <Link
            to="orders"
            className={active === 3 ? 'active' : ''}
            onClick={() => {
              toggleSidebar();
              toggleActiveIndex(3);
            }}
          >
            <div>
              <img src={orders} alt="" />
              <span>Orders</span>
            </div>
          </Link>
        </li>
        {/* Customers */}
        <li>
          <button
            className={active === 4 ? 'active' : ''}
            onClick={() => {
              toggleActiveIndex(4);
            }}
          >
            <div>
              <img src={customers} alt="" />
              <span>Customers</span>
            </div>
            <img
              className={`chevron-down ${
                displayDropdown === false ? 'rotate' : ''
              }`}
              src={dropdown}
              alt=""
            />
          </button>
          <div
            className={`drop-down ${
              active === 4 && displayDropdown === true ? 'active' : ''
            }`}
          >
            <NavLink
              to="customers/all"
              onClick={() => {
                toggleSidebar();
              }}
            >
              All Customers
            </NavLink>
            <NavLink
              to="customers/chat"
              onClick={() => {
                toggleSidebar();
              }}
            >
              Chat
            </NavLink>
          </div>
        </li>
        {/* Analytics */}
        <li>
          <Link
            to="analytics"
            className={active === 5 ? 'active' : ''}
            onClick={() => {
              toggleSidebar();
              toggleActiveIndex(5);
            }}
          >
            <div>
              <img src={analytics} alt="" />
              <span>Analytics</span>
            </div>
          </Link>
        </li>
        {/* Content Management */}
        <li>
          <button
            className={active === 6 ? 'active' : ''}
            onClick={() => {
              toggleActiveIndex(6);
            }}
          >
            <div>
              <img src={content} alt="" />
              <span>Content Management</span>
            </div>
            <img
              className={`chevron-down ${
                displayDropdown === false ? 'rotate' : ''
              }`}
              src={dropdown}
              alt=""
            />
          </button>
          <div
            className={`drop-down ${
              active === 6 && displayDropdown === true ? 'active' : ''
            }`}
          >
            <NavLink
              to="content/home"
              onClick={() => {
                toggleSidebar();
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="content/about"
              onClick={() => {
                toggleSidebar();
              }}
            >
              About Us
            </NavLink>
          </div>
        </li>
        {/* Reviews */}
        <li>
          <Link
            to="reviews"
            className={active === 7 ? 'active' : ''}
            onClick={() => {
              toggleSidebar();
              toggleActiveIndex(7);
            }}
          >
            <div>
              <img src={reviews} alt="" />
              <span>Reviews</span>
            </div>
          </Link>
        </li>
        {/* Promotions */}
        <li>
          <Link
            to="promotions"
            className={active === 8 ? 'active' : ''}
            onClick={() => {
              toggleSidebar();
              toggleActiveIndex(8);
            }}
          >
            <div>
              <img src={promotions} alt="" />
              <span>Promotions</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

// {/* products */}
// <li>
//   <button
//     className={active === 2 ? 'active' : ''}
//     onClick={() => {
// toggleActiveIndex(2);
//     }}
//   >
//     <div>
//       <img src={shoppingBag} alt="" />
//       <span>Products</span>
//     </div>
//     <img
//       className={`chevron-down ${
//         displayDropdown === false ? 'rotate' : ''
//       }`}
//       src={dropdown}
//       alt=""
//     />
//   </button>
//   <div
//     className={`drop-down ${
//       active === 2 && displayDropdown === true ? 'active' : ''
//     }`}
//   >
//     <NavLink to="/">All Products</NavLink>
//     <NavLink to="/">Product Category</NavLink>
//     <NavLink to="/">Add Product</NavLink>
//   </div>
// </li>
