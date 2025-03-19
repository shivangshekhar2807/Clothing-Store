import SingleClothes from "../WrapperComponents/SingleClothes";
import "./Clothes.css";

const DUMMY_DATA = [
  {
    name: "Flying Machine Blue T-Shirt",
    description: "100% cotton, breathable fabric",
    S: 5,
    M: 10,
    L: 7,
    price: 1500,
    id: "c1",
  },
  {
    name: "Levi's Black Denim Jacket",
    description: "Premium quality, durable material",
    S: 8,
    M: 12,
    L: 6,
    price: 3200,
    id: "c2",
  },
  {
    name: "Puma White Sneakers",
    description: "Comfortable and stylish, unisex",
    S: 4,
    M: 9,
    L: 5,
    price: 2800,
    id: "c3",
  },
  {
    name: "Nike Sports Joggers",
    description: "Perfect for workouts, sweat-proof",
    S: 6,
    M: 11,
    L: 8,
    price: 1800,
    id: "c4",
  },
];


function AvailableClothes() {

  return (
    <div className="available-clothes-container">
      <ul className="clothes-list">
        {DUMMY_DATA.map((item, index) => {
          return <SingleClothes key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
    
}

export default AvailableClothes;