import image from '../../assets/image.jpg';
import "./Header.css";
import HeaderCart from './HeaderCart';
function Header({showModalHandler}) {
  
    return (
    <div className="header">
      <h1 className="header-title">Stylish Clothes</h1>
     <HeaderCart showModalHandler={showModalHandler}></HeaderCart>
    </div>
  );
}
export default Header;