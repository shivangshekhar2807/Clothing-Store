import ReactDOM from "react-dom";
import './CartModal.css';

function BackDrops({dontShowModalHandler}) {
   
  return <div className="backdrop" onClick={dontShowModalHandler}></div>;
}

function ModalOverlays(props) {
  return (
    <div className="modal-overlay">
      {props.children}
    </div>
  );
}

function CartModal(props) {
//   return (
//     <>
//           <BackDrops dontShowModalHandler={props.dontShowModalHandler} />
//       <ModalOverlays>{props.children}</ModalOverlays>
//     </>
    //   );
    return (
    <>
      {/* Render Backdrop using Portal */}
      {ReactDOM.createPortal(
        <BackDrops dontShowModalHandler={props.dontShowModalHandler} />,
        document.getElementById("modal-root")
      )}

      {/* Render Modal Overlay using Portal */}
      {ReactDOM.createPortal(
        <ModalOverlays>{props.children}</ModalOverlays>,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default CartModal;