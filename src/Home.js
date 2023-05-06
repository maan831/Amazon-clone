import React from "react";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img
          src={require("./banner.jpg")}
          alt="banner"
          className="home-image"
        />
        <div className="home-row">
          <Product id="123123" title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover" price={29.99} image="https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg" rating={3} />
          <Product title="Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)" price={129.99} image="https://m.media-amazon.com/images/I/718Bxs69wUL._SL1500_.jpg" rating={3}  />
        </div>
        <div className="home-row">
          <Product id="123456" title="Apple Watch Ultra
Titanium Case with Green Alpine Loop" price={219.99} image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQE23ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_IN?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713657930%2C1660927566964%2C1661371890735" rating={3} />
          <Product id="123457" title="Amazon Echo 3rd Gen Bluetooth Speaker" price={129.99} image="https://5.imimg.com/data5/SELLER/Default/2021/3/NP/JJ/EM/3983433/echo-3rd-generation-500x500.jpg" rating={3} />
          <Product id="123458" title="Apple 2021 iPad Pro M1 chip (11-inch/27.96 cm, Wi-Fi + Cellular, 1TB) - Space Grey (3rd Generation)" price={299.99} image="https://m.media-amazon.com/images/I/81a-rN2A3DS._SX522_.jpg" rating={3} />
        </div>
        <div className="home-row">
          <Product id="123459" title="Samsung 49-Inch Odyssey G9 Gaming Monitor Review: Big Screen, Big 1000R Curve" price={29.99} image="https://5.imimg.com/data5/SELLER/Default/2021/11/JP/PM/YQ/11078779/1-1000x1000.jpg" rating={3} />
        </div>
      </div>
    </div>
  );
};

export default Home;
