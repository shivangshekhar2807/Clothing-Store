import { useReducer } from "react";
import AllContext from "./store-context";

function handleReducer(currObj, action) {
    if (action.type === "ADD") {
        const isItemInCart = currObj.some((item) => item.id === action.payload.id);
        
        if (!isItemInCart) {
             return [...currObj, action.payload];
        }
        else {
                    const updatedMeals = currObj.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, amount: item.amount + Number(action.payload.S) + Number(action.payload.M) + Number(action.payload.L),S:item.S + Number(action.payload.S),M:item.M + Number(action.payload.M),L:item.L + Number(action.payload.L)};
                
                }
                return item;
            })
            return updatedMeals;
        }
    }
    else if (action.type === "DELETE") {
         const updatedMeals = currObj.filter(meal => meal.id !== action.payload.id)
        
        return updatedMeals;
    }
    return currObj;
}


function WrapperApp(props) {

    const [showCartData, dispatchCartData] = useReducer(handleReducer, []);

    function AddToCart(obj) {
        dispatchCartData(obj)
    }


    function DeleteFromCart(obj) {
        dispatchCartData(obj)
    }

    return <AllContext.Provider value={{showCartData:showCartData, AddToCart: AddToCart,
    DeleteFromCart:DeleteFromCart,

    }}>{props.children}</AllContext.Provider>
}

export default WrapperApp;