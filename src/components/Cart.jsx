import { useState, useEffect } from "react";

const Cart = ({ cart, setCart }) => {
  const [subtotalCart, setSubtotalCart] = useState(0);
  const [deliveryCost, setDeliveryCost] = useState(2.5);

  //Quand le panier est mis à jour on met à jour le state du sous-total panier
  useEffect(() => {
    const subTotal = cart.reduce((acc, meal) => {
      return acc + meal.quantity * meal.price;
    }, 0);
    setSubtotalCart(subTotal);
  }, [cart]);

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
          <div className="sum">
            <div className="subtotal">
              <span>Sous-total</span>
              <span>{subtotalCart} €</span>
            </div>
            <div className="delivery">
              <span>Frais de livraison</span>
              <span>{deliveryCost} €</span>
            </div>
            <div className="total">
              <span>Total</span> <span>{subtotalCart + deliveryCost} €</span>
            </div>
          </div>
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
