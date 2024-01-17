import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = ({ data, cart, setCart }) => {
  const addToCart = (meal) => {
    const newMeal = { name: meal.title, price: meal.price, quantity: 1 };
    setCart([...cart, newMeal]);
  };

  return data.categories.map((cat) => {
    return (
      <section>
        <h2>{cat.name}</h2>
        <div className="meals">
          {cat.meals.map((meal) => {
            return (
              <div
                className="menu-item"
                onClick={() => {
                  addToCart(meal);
                }}
              >
                <div className="menu-item-text">
                  <h3>{meal.title}</h3>
                  <p>{meal.description}</p>
                  <div className="item-infos">
                    <span>{meal.price} €</span>
                    {meal.popular && (
                      <span id="popular">
                        <FontAwesomeIcon icon="star" />
                        <aside>Populaire</aside>
                      </span>
                    )}
                  </div>
                </div>
                {meal.picture && (
                  <div className="menu-item-picture">
                    <img src={meal.picture} alt="Meal picture" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    );
  });
};

export default Menu;
