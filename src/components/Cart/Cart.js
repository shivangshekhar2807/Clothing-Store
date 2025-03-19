import InsideCart from "../WrapperComponents/InsideCart";
import CartModal from "./CartModal";
import './Cart.css';
import { useContext } from "react";
import AllContext from "../Store/store-context";
import TotalPrice from "./TotalPrice";

// const CART_DATA=[{
//     name: "Flying Machine Blue T-Shirt",
//     description: "100% cotton, breathable fabric",
//     S: 2,
//     M: 0,
//     L: 1,
//     amount:3,
//     price: 1500,
//     id: "c1",
// },]
  
function Cart({ dontShowModalHandler }) {
    
    const contextData = useContext(AllContext);
     
    return (
        <CartModal dontShowModalHandler={dontShowModalHandler}>
            <div className="cart-content">
                <div className="cart-item">
                    <ul>
                        {contextData.showCartData.map((item) => (
                            <InsideCart key={item.id} item={item} />
                        ))}
                        <TotalPrice total={contextData.showCartData}></TotalPrice>
                    </ul>
                </div>

                <div className="cart-actions">
                    <button className="close-btn" onClick={dontShowModalHandler} >Close</button>
                    <button className="order-btn">Order</button>
                </div>
            </div>
        </CartModal>
    );
}
export default Cart;


