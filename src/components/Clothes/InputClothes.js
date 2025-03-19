import { useContext, useState } from "react";
import "./InputClothes.css";
import AllContext from "../Store/store-context";


function InputClothes({ item }) {

    const [valueforS, setValueForS] = useState(item.S);
    const [valueforM, setValueForM] = useState(item.M);
     const [valueforL, setValueForL] = useState(item.L);

    const contextFunction = useContext(AllContext);
    
    function handleOnSubmit(event) {
        event.preventDefault();
         const SValue = Number(event.target.elements[`S-${item.id}`].value.trim());
         const MValue = Number(event.target.elements[`M-${item.id}`].value.trim());
        const LValue = Number(event.target.elements[`L-${item.id}`].value.trim());

        if (valueforS <= 0) {
            return;
        }
         setValueForS(valueforS - SValue);
         
        if (valueforM <= 0) {
            return;
         }
        setValueForM(valueforM - MValue);

        if (valueforL <= 0) {
            return;
        }
        setValueForL(valueforL - LValue);
        
        if (SValue<=0 && MValue<=0 && LValue<=0) {
            return;
        }

        const obj = {
            type: "ADD", payload: {
                S: SValue,
                M: MValue,
                L: LValue,
                amount:SValue + MValue+ LValue,
                name: item.name,
                price: item.price,
                id: item.id,
            }
        }
        contextFunction.AddToCart(obj);

    }

    return (
    <form className="input-clothes-form" onSubmit={handleOnSubmit}>
      <div className="input-group">
                <label htmlFor={`S-${item.id}`}>S:{valueforS}</label>
        <input
          id={`S-${item.id}`}
          name={`S-${item.id}`}
          type="number"
          min="0"
          max={item.S}
          defaultValue="0"
        />
      </div>

      <div className="input-group">
                <label htmlFor={`M-${item.id}`}>M:{valueforM}</label>
        <input
          id={`M-${item.id}`}
          name={`M-${item.id}`}
          type="number"
          min="0"
          max={item.M}
          defaultValue="0"
        />
      </div>

      <div className="input-group">
                <label htmlFor={`L-${item.id}`}>L:{valueforL}</label>
        <input
          id={`L-${item.id}`}
          name={`L-${item.id}`}
          type="number"
          min="0"
          max={item.L}
          defaultValue="0"
        />
      </div>

      <button type="submit" className="add-btn">
        + ADD
      </button>
    </form>
  );
    
}
export default InputClothes;