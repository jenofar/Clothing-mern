import "../components/style.css";
import image from "../image/cart-img-1.png";
import image2 from "../image/cart-img-2.png";
import image3 from "../image/cart-img-3.png";
import jeans from '../image/jeans.jpg'
import shirts from '../image/shirts.jpg'
import kurti from "../image/kurti.jpg";
import babyboy from "../image/baby-boy.jpg";
import princess from "../image/princess.jpg";
import saree from "../image/saree.jpg";
import coat from "../image/coat.jpg";
import tshirts from "../image/tshirts.jpg";
import currency from "../image/payment.png";
import axios from "axios";
import userContext from '../context';
import {useContext, useState} from "react"
import { useNavigate } from "react-router-dom";
import Cart from "./cart";
export default function Product() {
  var head=useContext(userContext)
  const navigate = useNavigate();
  const [modelshow,setModelshow]=useState(false)
  const addtocart=async(name,price,product_id)=>{
    axios.post('http://localhost:3002/api/cart/insertcart',{name:name,price:price,product_id:product_id,quantity:1},{headers:{
      'Content-Type':'application/json',
      'x-auth-token':head.auth
    }}).then(res=>{
      console.log(res.data);
    })

  }
  

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          {" "}
          <i className="fas fa-shopping-basket"></i> Clothing{" "}
        </a>

        <div className="icons">
          <div className="fas fa-bars" id="menu-btn"></div>
          <div onClick={()=>(navigate('/cart'))} className="fas fa-shopping-cart" id="cart-btn"></div>
          <div className="fas fa-user" id="login-btn" onClick={()=>{
            head.auth=null;
            navigate('/')
          }}> Logout</div>
        </div>
      </header> 

      <section className="products" id="products">
        <h1 className="heading">
          {" "}
          our <span>products</span>{" "}
        </h1>

        <div className="swiper product-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <img src={jeans} alt=""></img>
              <h3>Jeans</h3>
              <div className="price"> $120- </div>
             
              {/* <a href="#" className="btn">
                add to cart
              </a> */}
              <button onClick={()=>(addtocart('jeans',120,701))}  className="btn">Add to Cart</button>
            </div>

            <div className="swiper-slide box">
              <img src={shirts} alt=""></img>
              <h3>Shirts</h3>
              <div className="price"> $1000- </div>

              <button onClick={()=>(addtocart('shirts',1000,702))}  className="btn">Add to Cart</button>
            </div>

            <div className="swiper-slide box">
              <img src={kurti} alt=""></img>
              <h3>Kurties</h3>
              <div className="price"> $500- </div>
              
              <button onClick={()=>(addtocart('kurti',500,703))}  className="btn">Add to Cart</button>
            </div>

            <div className="swiper-slide box">
              <img src={babyboy} alt=""></img>
              <h3>Baby Boys</h3>
              <div className="price"> $1300/- </div>
              <button onClick={()=>(addtocart('baby-boys',1300,704))}  className="btn">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="swiper product-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <img src={princess} alt=""></img>
              <h3>Princess</h3>
              <div className="price"> $3000/- </div>
              <button onClick={()=>(addtocart('princess',3000,705))}  className="btn">Add to Cart</button>
            </div>

            <div className="swiper-slide box">
              <img src={saree} alt=""></img>
              <h3>saree</h3>
              <div className="price"> $2500- </div>
              
              <button onClick={()=>(addtocart('saree',2500,706))}  className="btn">Add to Cart</button>
            </div>

            <div className="swiper-slide box">
              <img src={coat} alt=""></img>
              <h3>Coats</h3>
              <div className="price"> $6000/- </div>
              
              <button onClick={()=>(addtocart('coat',6000,707))}  className="btn">Add to Cart</button>
            </div>

            <div className="swiper-slide box">
              <img src={tshirts} alt=""></img>
              <h3>T-Shirts</h3>
              <div className="price"> $300/- </div>
              
              <button onClick={()=>(addtocart('tshirt',300,708))}  className="btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>
              {" "}
              Clothing <i className="fas fa-shopping-basket"></i>{" "}
            </h3>
            <p>
            Fashion is part of the daily air and it changes all the time, with all the events. You can even see the approaching of a revolution in clothes. You can see and feel everything in clothes.
            </p>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>

          <div className="box" id="box-align">
            <h3>contact info</h3>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-phone"></i> 9787636093{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-phone"></i> 9342049246{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-envelope"></i>jenofar@gmail.com{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-map-marker-alt"></i> Coimbatore, india -
              641020{" "}
            </a>
          </div>

          <div className="box">
            <h3>newsletter</h3>
            <p>subscribe for latest updates</p>
            <input
              type="email"
              placeholder="your email"
              className="email"
            ></input>
            <input type="submit" value="subscribe" className="btn"></input>
            <img src={currency} className="payment-img" alt=""></img>
          </div>
        </div>
      </section>
    </>
  );
}
