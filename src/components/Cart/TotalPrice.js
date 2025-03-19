

function TotalPrice({total}) {
     const totalAmount = total.reduce((curr, item) => {
    return curr + Number(item.price) * Number(item.amount);
     }, 0);
    
   return (
    <li >
      <span >Total Amount:</span>
      <span >₹{totalAmount}</span>
    </li>
  );
}
export default TotalPrice;