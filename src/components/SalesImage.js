import sale from "../images/sale.jpg";

function SalesImage() {
  return (
    <div className="sale-image">
      <img src={sale} alt="Sale Image"></img>
      <div className="sale-image__offer">
        <h1>Udemy Flash Sale! 24 hours to sale</h1>
        <p>
          Get the top courses for just 499. Just one day to save but a lifetime
          to learn
        </p>
      </div>
    </div>
  );
}
export default SalesImage;