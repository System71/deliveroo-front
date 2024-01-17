const Cart = ({ data, cart, setCart }) => {
  return (
    <div className="cart">
      <button>Valider mon panier</button>
      <div className="cart-content">
        {cart.map((elt) => {
          return (
            <div className="cart-item">
              <div className="left-cart">
                <p>{elt.quantity}</p>
                <p>{elt.name}</p>
              </div>
              <p>{elt.price} €</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
