
import { useContext } from 'react';
import './InsideCart.css';
import AllContext from '../Store/store-context';
function InsideCart({ item }) {
    
    const contextFunction = useContext(AllContext);

    function deletehandler() {
        const obj = {
            type: "DELETE",
            payload:{id:item.id}
        }
        contextFunction.DeleteFromCart(obj)
    }


    return (
        <li>
            <h2>{item.name}</h2>
            <h4>{`S ${item.S}`}</h4>
            <h4>{`M ${item.M}`}</h4>
            <h4>{`L ${item.L}`}</h4>
            <h3>{item.amount}</h3>
            
            
            <div className="price-btn-container">
                <h2>{`₹${item.price}`}</h2>
                <button onClick={deletehandler}>-</button>
            </div>
        </li>
    );
}
export default InsideCart;