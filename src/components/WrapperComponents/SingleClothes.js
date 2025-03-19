import "../Clothes/Clothes.css";
import InputClothes from "../Clothes/InputClothes";
function SingleClothes({item}) {
    return (
    <li className="single-clothes-card">
      <div className="clothes-details">
        <h3 className="clothes-name">{item.name}</h3>
        <p className="clothes-description">{item.description}</p>
        <div className="clothes-sizes">
          <InputClothes item={item}></InputClothes>
        </div>
        <span className="clothes-price">₹{item.price}</span>
      </div>
    </li>
  );
}
export default SingleClothes;