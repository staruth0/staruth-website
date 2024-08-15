import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../../commons/Header';
// images
import search from '../../../assets/icons/Search.svg';
import dots from '../../../assets/icons/horizontal-dots.png';
import star from '../../../assets/icons/Star.svg';

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  useEffect(() => {
    fetch(`https://appleproductsbackend.vercel.app/api/order/fetchOne/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
      })
      .catch((err) => console.log('Error fetching orders:', err));
  }, []);
  return (
    <>
      <Header text="Orders" />
      <div className="container">
        <div className="table-container orders-table order-details-table">
          <table>
            <thead>
              <tr>
                <th>Customer Name</th>
                <th className="items">Items Ordered</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Status</th>
                <th className="shipping">Shipping Address</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>John Dankilowise</td>
                <td>
                  <span>MacBook 2023: Red</span>
                  <span>Apple Watch Series 9: Pink</span>
                </td>
                <td>
                  <span>2</span>
                  <span>2</span>
                </td>
                <td>
                  <span>$21</span>
                  <span>$133</span>
                </td>
                <td>Delivered</td>
                <td>
                  <ul>
                    <li>Joseph Parker</li>
                    <li>+(256) 345 354 783</li>
                    <li>2186 Joyce Street Rocky Mountain</li>
                    <li>California - 24567</li>
                    <li>United States</li>
                  </ul>
                </td>
              </tr> */}
              {order ? (
                <tr>
                  <td>{order.delivery_info.delivery_person}</td>
                  <td>
                    {order.products.map((item) => (
                      <p>
                        {item.product_id} || {item.price} || {item.color}
                      </p>
                    ))}
                  </td>
                  <td>{order.products.length}</td>
                  <td>${order.total_Amount}</td>
                  <td>{order.order_status}</td>
                  {/* <td>{order.date_added.toLocaleDateString()}</td> */}
                  <td>{order.createdAt}</td>
                </tr>
              ) : (
                <p>Order Details get issues</p>
              )}
            </tbody>
          </table>
        </div>
        <div className="order-summary order-details-summary">
          <h3>Order Summary</h3>
          <div className="summary">
            <div>
              <p>Sub-Total:</p>
              <span>$500</span>
            </div>
            <div>
              <p>Coupon:</p>
              <span>- $0</span>
            </div>
            <div>
              <p>Shipping:</p>
              <span>$29</span>
            </div>
            <hr />
            <div>
              <p>
                <b>Total:</b>
              </p>
              <span>
                <b>$520</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
