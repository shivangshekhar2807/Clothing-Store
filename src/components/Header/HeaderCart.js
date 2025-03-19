import { useContext } from "react";
import "./Header.css";
import AllContext from "../Store/store-context";


function HeaderCart({ showModalHandler }) {
  
  const contextData = useContext(AllContext);

  const total = contextData.showCartData.reduce((curr, item) => {
    curr = curr + Number(item.amount);
    return curr;
   },0)
    
    return <button className="cart-btn" onClick={showModalHandler}>
      Cart <span className="cart-count">{total}</span>
      </button>

}
export default HeaderCart;