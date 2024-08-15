import HeaderBtn from '../../../commons/HeaderBtn';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// fxns
import handleSorting from '../../../utils/handlers/handleSort';
// components
import performFetchDelete from '../../../utils/Fetch/PerformFetchDelete';
import ProductCategorySkeleton from '../../../../user_panel/commons/skeletons/ProductCategorySkeleton';
// images
import dots from '../../../assets/icons/horizontal-dots.png';
import search from '../../../assets/icons/Search.svg';

const AllProducts = () => {
  const [deleteId, setDeleteId] = useState(null);
  const [productName, setProductName] = useState('');
  // for the first display to confirm delete
  const [display, setDisplay] = useState(false);
  // for the second display to enter product name then delete the product
  const [inputDis, setInputDis] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleActiveIndex = (index) => {
    index === activeIndex ? setActiveIndex(null) : setActiveIndex(index);
  };
  // also toggle index if you click anywhere on screen

  const handleClickOutside = () => {
    if (Number.isInteger(activeIndex)) {
      setActiveIndex(null);
    }
  };
  // perform product deletetion
  const performDelete = () => {
    if (inputProductVal === productName) {
      setInputProductVal('');
      alert(`You deleted the product: ${productName}`);
      performFetchDelete(`api/products/delete/${deleteId}`);
      setProducts(products.filter((product) => product.id !== deleteId));
      setDisplayedProducts(
        displayedProducts.filter((product) => product.id !== deleteId)
      );
      closeDisplay();
    } else {
      return;
    }
  };
  const closeDisplay = () => {
    setDisplay(false);
    setInputDis(false);
  };
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'iPhone 13',
      description:
        'Latest generation iPhone with A15 Bionic chip and improved cameras',
      cost_price: '$799',
      selling_price: '$799',
      category: 'iPhones',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-blue-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202834000',
      date_added: new Date('2021-10-12'),
    },
    {
      id: 2,
      name: 'MacBook Pro 14-inch',
      description:
        'Powerful laptop with Apple Silicon chip and enhanced display',
      cost_price: '$1999',
      selling_price: '$1999',
      category: 'Mac Books',
      image:
        'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP854/mbp14-silver2.png',
      date_added: new Date('2021-10-13'),
    },
    {
      id: 3,
      name: 'iPad Air (4th generation)',
      description:
        'Versatile tablet with A14 Bionic chip and support for Apple Pencil',
      cost_price: '$599',
      selling_price: '$599',
      category: 'iPad',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-ipad-air-wifi-green-2021?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1644268592092',
      date_added: new Date('2021-10-14'),
    },
    {
      id: 4,
      name: 'Apple Watch Series 7',
      description:
        'Advanced smartwatch with larger display, enhanced durability, and new health features',
      cost_price: '$399',
      selling_price: '$429',
      category: 'wearables',
      image:
        'https://i5.walmartimages.com/asr/3580b718-154d-427d-898c-05b3e46332ba.779952d7e83af1cd4883757c516eb7b5.png',
      date_added: new Date('2021-10-15'),
    },
    {
      id: 5,
      name: 'AirPods Max',
      description:
        'High-fidelity over-ear Air Pods with active noise cancellation',
      cost_price: '$549',
      selling_price: '$549',
      category: 'Air Pods',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-spacegray-202011_FV1_FMT_WHH?wid=940&hei=800&fmt=jpeg&qlt=90&.v=1604776025000',
      date_added: new Date('2021-10-16'),
    },
    {
      id: 6,
      name: 'iMac 24-inch (M1)',
      description:
        'All-in-one desktop computer with vibrant 24-inch Retina display and Apple Silicon M1 chip',
      cost_price: '$1299',
      selling_price: '$1299',
      category: 'Displays',
      image:
        'https://www.phoneplacekenya.com/wp-content/uploads/2021/07/24-inch-Blue-iMac-a.jpg',
      date_added: new Date('2021-10-17'),
    },
    {
      id: 7,
      name: 'iPhone SE (2nd generation)',
      description: 'Compact iPhone with A13 Bionic chip and Touch ID',
      cost_price: '$399',
      selling_price: '$399',
      category: 'iPhones',
      image:
        'https://img.kasa.cz/k-foto/ilustrace/800/6/2/5/product_2473526.jpg',
      date_added: new Date('2021-10-18'),
    },
    {
      id: 8,
      name: 'MacBook Air M1',
      description:
        'Thin and lightweight laptop powered by Apple Silicon M1 chip',
      cost_price: '$999',
      selling_price: '$999',
      category: 'Mac Books',
      image:
        'https://www.wearesync.co.uk/wp-content/uploads/2022/06/macbook-air-m2-space-grey-1.jpg',
      date_added: new Date('2021-10-19'),
    },
    {
      id: 10,
      name: 'iPhone 13 Pro',
      description:
        "Apple's flagship smartphone with A15 Bionic chip and ProMotion display",
      cost_price: '$999',
      selling_price: '$1099',
      category: 'iPhones',
      image:
        'https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_GEO_09142021_inline.jpg.large.jpg',
      date_added: new Date('2021-10-22'),
    },
    {
      id: 12,
      name: 'iPad Pro (5th generation)',
      description:
        'Powerful tablet with M1 chip, Liquid Retina XDR display, and 5G support',
      cost_price: '$799',
      selling_price: '$899',
      category: 'iPad',
      image:
        'https://i5.walmartimages.com/asr/d8519e04-8477-44ef-9dff-75820422ef78.bcbc075396ef4de38fdd82b6285ef534.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      date_added: new Date('2021-10-24'),
    },
    {
      id: 14,
      name: 'AirPods Pro',
      description:
        'Wireless earbuds with active noise cancellation and transparency mode',
      cost_price: '$249',
      selling_price: '$249',
      category: 'Air Pods',
      image:
        'https://images.macrumors.com/t/2oOomFnia-hmIfwvXVejKx3mNEE=/1600x/article-new/2019/10/airpods-pro-roundup.jpg',
      date_added: new Date('2021-10-26'),
    },
  ]);
  // used to store the value of the product to be deleted entered by user
  const [inputProductVal, setInputProductVal] = useState('');
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [categoryValue, setCategoryValue] = useState('');
  const [orderByDateValue, setOrderByDateValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleOnchange = (e) => {
    if (e.target.name === 'category') {
      setCategoryValue(e.target.value);
      const search = products.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      const cat = search.filter((product) =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      const date = handleSorting(cat, orderByDateValue);
      setDisplayedProducts(date);
    } else if (e.target.name === 'order_by_date') {
      setOrderByDateValue(e.target.value);
      const search = products.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      const cat = search.filter((product) =>
        product.name.toLowerCase().includes(categoryValue.toLowerCase())
      );
      const date = handleSorting(cat, e.target.value);
      setDisplayedProducts(date);
    } else if (e.target.name === 'search') {
      setSearchValue(e.target.value);
      const search = products.filter((product) =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      const cat = search.filter((product) =>
        product.name.toLowerCase().includes(categoryValue.toLowerCase())
      );
      const date = handleSorting(cat, orderByDateValue);
      setDisplayedProducts(date);
    }
  };

  return (
    <>
      <HeaderBtn
        text="All Products"
        url="/admin/product/add"
        urlText="Add Product"
      />
      <div className="container" onClick={handleClickOutside}>
        {/* search and filter */}
        <div className="search-filters">
          <div className="search-container">
            <img src={search} alt="search icon" />
            <input
              type="search"
              placeholder="Search by product name"
              name="search"
              onChange={handleOnchange}
            />
          </div>
          <div className="filters-container">
            {/* filter by category */}
            <select name="category" id="" onChange={handleOnchange}>
              <option value="">All Categories</option>
              <option value="watch">Watch</option>
              <option value="iphone">iPhone</option>
              <option value="ipad">iPad</option>
              <option value="airpod">AirPods</option>
              <option value="macbook">MacBooks</option>
            </select>
            {/* order by date */}
            <select name="order_by_date" id="" onChange={handleOnchange}>
              <option value="">Order By</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>

        <div className="product-container product-container-admin">
          {products ? (
            displayedProducts.length > 0 ? (
              displayedProducts.map((product, index) => (
                <div
                  className="product-card"
                  key={product.id}
                  style={{
                    alignItems: 'start',
                    height: 'fit-content',
                  }}
                >
                  <div
                    className="product-image"
                    style={{
                      alignSelf: 'center',
                    }}
                  >
                    <img src={product.image} alt={product.title} />
                  </div>
                  <h3 className="name">{product.name}</h3>
                  <p style={{ textAlign: 'left' }}>{product.description}</p>
                  <p>{product.category}</p>
                  <p>
                    Cost Price: <span>{product.cost_price}</span>
                  </p>
                  <p>
                    Selling Price: <span>{product.selling_price}</span>
                  </p>
                  <div className="btn-container admin">
                    <Link to="/overview" className="link">
                      <span>View</span>
                      <i className="bx bx-chevron-right"></i>
                    </Link>
                    <div className="buttons grey-bg">
                      <button
                        className="manage-icon"
                        onClick={() => {
                          toggleActiveIndex(index);
                        }}
                      >
                        <img src={dots} alt="" width="20px" height="20px" />{' '}
                      </button>
                      <div
                        className={`${index === activeIndex ? 'active' : ''}`}
                      >
                        <Link
                          className="blue"
                          to={`/admin/products/edit/${product.name
                            .toLowerCase()
                            .replace(/\s/g, '')}`}
                        >
                          Edit
                        </Link>
                        <button
                          className="delete"
                          onClick={() => {
                            setDeleteId(product.id);
                            setProductName(product.name);
                            setDisplay(true);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="product-not-found">No Product Found!</p>
            )
          ) : (
            <ProductCategorySkeleton />
          )}
        </div>
        <div className={`confirm-delete ${display === true ? 'active' : ''}`}>
          <div>
            <p>Are you sure you want to delete this product?</p>
            <div className="btn-container">
              <button
                className="btn danger"
                onClick={() => {
                  setDisplay(false);
                  setInputDis(true);
                }}
              >
                Delete
              </button>
              <button
                className="btn"
                onClick={() => {
                  closeDisplay();
                  setActiveIndex(null);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        <div className={`confirm-delete ${inputDis === true ? 'active' : ''}`}>
          <div>
            <p>Enter product name to delete this product ({productName})</p>
            <input
              type="text"
              placeholder="Enter Product Name"
              style={{ width: '100%' }}
              value={inputProductVal}
              onChange={(e) => {
                setInputProductVal(e.target.value);
              }}
            />
            <div className="btn-container">
              <button
                className="btn danger"
                style={{
                  backgroundColor: `${
                    productName === inputProductVal ? 'red' : '#f006'
                  }`,
                  cursor: `${
                    productName === inputProductVal ? 'pointer' : 'default'
                  }`,
                }}
                onClick={() => {
                  if (inputProductVal === productName) {
                    performDelete();
                  }

                  setActiveIndex(null);
                }}
              >
                Delete
              </button>
              <button
                className="btn"
                onClick={() => {
                  closeDisplay();
                  setActiveIndex(null);
                  setInputProductVal('');
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
