const Cart = ({ data, cart, setCart }) => {
  const addQuantity = (index) => {
    const copyCart = [...cart];
    copyCart[index].quantity++;
    setCart(copyCart);
  };

  const removeQuantity = (index) => {
    const copyCart = [...cart];
    copyCart[index].quantity--;

    if (copyCart[index].quantity === 0) {
      copyCart.splice(index, 1);
    }

    setCart(copyCart);
  };

  return (
    <div className="cart">
      <button>Valider mon panier</button>

      {cart.length !== 0 ? (
        <div className="cart-content">
          {cart.map((meal, index) => {
            return (
              <div key={meal.id} className="cart-item">
                <div className="left-cart">
                  <button onClick={() => removeQuantity(index)}>-</button>
                  <p>{meal.quantity}</p>
                  <button onClick={() => addQuantity(index)}>+</button>
                  <p>{meal.name}</p>
                </div>
                <p>{meal.price * meal.quantity} €</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="empty-cart">
          <p>Votre panier est vide</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
