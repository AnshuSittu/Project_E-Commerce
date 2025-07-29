import React from "react";
import "./ProductDisplay.css";
import Star_icon from "../../assets/star_icon.png";
import dull_star from "../../assets/star_dull_icon.png";

function ProductDisplay(props) {
  const { product } = props;

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" height="150px" />
          <img src={product.image} alt="" height="150px" />
          <img src={product.image} alt="" height="150px" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt="Product Images"
            height="500px"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div>
          <img src={Star_icon} alt="star img" height="20px" />
          <img src={Star_icon} alt="star img" height="20px" />
          <img src={Star_icon} alt="star img" height="20px" />
          <img src={dull_star} alt="star img" height="20px" />
          <p>(130)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ₹{product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
             ₹{product.new_price}
          </div>
          </div>
          <div className="prductdisplay-right-description">
            <h4>Product Description</h4>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </span>
          </div>
          <div className="productdisplay-right-size">
            <h2>Select Size</h2>
            <div className="productdisplay-right-sizes">
              <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
            </div>
            
            <button>Add To Cart</button>
            <div className="productdisplay-right-category">
              <span>Category :<span> Women,T-shirt, Crop Top</span></span>
            </div>
            <div className="productdisplay-right-category">
              <span>Category :<span> Mordern,New Arrival, Trandding</span></span>
            </div>
          </div>
        </div>
      </div>
 
  );
}

export default ProductDisplay;
