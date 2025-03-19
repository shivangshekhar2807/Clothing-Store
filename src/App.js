import Header from "./components/Header/Header";
import Clothes from "./components/Clothes/Clothes";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import WrapperApp from "./components/Store/WrapperApp";

function App() {
  
  const [showModal, setShowModal] = useState(false);

  function showModalHandler() {
    setShowModal(true);
  }

  function dontShowModalHandler() {
    setShowModal(false);
  }

  return <WrapperApp>
   {showModal && <Cart dontShowModalHandler={dontShowModalHandler}></Cart>}
    <Header showModalHandler={showModalHandler}></Header>
    <Clothes></Clothes>
     </WrapperApp>
}

export default App;
