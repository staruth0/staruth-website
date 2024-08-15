import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// fxns and components
import performFetchDelete from '../../../utils/Fetch/PerformFetchDelete';
import ProductCategorySkeleton from '../../../../user_panel/commons/skeletons/ProductCategorySkeleton';
import HeaderBtn from '../../../commons/HeaderBtn';
import handleSorting from '../../../utils/handlers/handleSort';

// images
import search from '../../../assets/icons/Search.svg';
import dots from '../../../assets/icons/horizontal-dots.png';

const ProductCategories = () => {
  const [products, setProducts] = useState(null);
  // const [products, setProducts] = useState([
  //   {
  //     id: '1',
  //     name: 'iPhone',
  //     image:
  //       'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-blue-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202834000',
  //     date_added: new Date('2012-02-02'),
  //   },
  //   {
  //     id: '2',
  //     name: 'iPad',
  //     image:
  //       'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-ipad-air-wifi-green-2021?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1644268592092',
  //     date_added: new Date('2012-01-02'),
  //   },
  //   {
  //     id: '3',
  //     name: 'MacBook',
  //     image:
  //       'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP854/mbp14-silver2.png',
  //     date_added: new Date('2012-04-02'),
  //   },
  //   {
  //     id: '4',
  //     name: 'Watch',
  //     image:
  //       'https://i5.walmartimages.com/asr/3580b718-154d-427d-898c-05b3e46332ba.779952d7e83af1cd4883757c516eb7b5.png',
  //     date_added: new Date('2012-06-02'),
  //   },
  //   {
  //     id: '5',
  //     name: 'AirPod',
  //     image:
  //       'https://images.macrumors.com/t/2oOomFnia-hmIfwvXVejKx3mNEE=/1600x/article-new/2019/10/airpods-pro-roundup.jpg',
  //     date_added: new Date('2012-07-02'),
  //   },
  // ]);
  useEffect(() => {
    fetch('https://appleproductsbackend.vercel.app/v1/category/')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setDisplayedProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);
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
  const handleClickOutside = () => {
    if (Number.isInteger(activeIndex)) {
      setActiveIndex(null);
    }
  };
  // perform product deletetion
  const performDelete = () => {
    if (inputProductVal === productName) {
      setInputProductVal('');
      alert(`You deleted the category: ${productName}`);
      performFetchDelete(`v1/category/${deleteId}`);
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

  // used to store the value of the product to be deleted entered by user
  const [inputProductVal, setInputProductVal] = useState('');
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [orderByDateValue, setOrderByDateValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleOnchange = (e) => {
    if (e.target.name === 'order_by_date') {
      setOrderByDateValue(e.target.value);
      const search = products.filter((product) =>
        product.categoryName.toLowerCase().includes(searchValue.toLowerCase())
      );
      const date = handleSorting(search, e.target.value);
      setDisplayedProducts(date);
    } else if (e.target.name === 'search') {
      setSearchValue(e.target.value);
      const search = products.filter((product) =>
        product.categoryName
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
      const date = handleSorting(search, orderByDateValue);
      setDisplayedProducts(date);
    }
  };

  return (
    <>
      <HeaderBtn
        text="Product Categories"
        url="/admin/products/categories/add"
        urlText="Add Category"
      />
      <div className="container" onClick={handleClickOutside}>
        {/* search and filter */}
        <div className="search-filters">
          <div className="search-container">
            <img src={search} alt="search icon" />
            <input
              type="search"
              placeholder="Search by category name"
              name="search"
              onChange={handleOnchange}
            />
          </div>
          <div className="filters-container">
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
                    height: 'fit-content',
                    borderRadius: '22px',
                  }}
                >
                  <div
                    className="product-image"
                    style={{
                      alignSelf: 'center',
                      borderRadius: '22px',
                    }}
                  >
                    <img src={product.image} alt={product.categoryName} />
                  </div>
                  <h3 className="name">{product.categoryName}</h3>
                  <div className="btn-container admin">
                    <Link to={`/${product.categoryName}`} className="link">
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
                        <img src={dots} alt="" width="20px" height="20px" />
                      </button>
                      <div
                        className={`${index === activeIndex ? 'active' : ''}`}
                      >
                        <Link
                          className="blue"
                          to={`edit/${product.categoryName
                            .toLowerCase()
                            .replace(/\s/g, '')}`}
                        >
                          Edit
                        </Link>
                        <button
                          className="delete"
                          onClick={() => {
                            setDeleteId(product.id);
                            setProductName(product.categoryName);
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
              <p className="product-not-found">No Category Found!</p>
            )
          ) : (
            <ProductCategorySkeleton />
          )}
        </div>
        <div className={`confirm-delete ${display === true ? 'active' : ''}`}>
          <div>
            <p>Are you sure you want to delete this Category?</p>
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
            <p>Enter category name to delete this category ({productName})</p>
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

export default ProductCategories;
