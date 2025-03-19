
import { createContext } from "react";

const AllContext = createContext({
    AddToCart: () => { },
    DeleteFromCart:()=>{},
});

export default AllContext;