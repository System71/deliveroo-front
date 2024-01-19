import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = ({ data, cart, setCart }) => {
  //Fonction pour ajouter au panier au clique sur les items
  const addToCart = (meal) => {
    const found = cart.findIndex((elt) => elt.id === meal.id);

    if (found !== -1) {
      const copyCart = [...cart];
      copyCart[found].quantity++;
      setCart(copyCart);
    } else {
      const newMeal = {
        name: meal.title,
        price: meal.price,
        quantity: 1,
        id: meal.id,
      };
      setCart([...cart, newMeal]);
    }
  };

  return data.categories.map((cat, index) => {
    return (
      //On vérifie qu'il a des éléments dans la catégorie pour ne pas afficher que les titres
      cat.meals.length !== 0 && (
        //Que mettre en key à part index? name?
        <section key={index}>
          <h2>{cat.name}</h2>
          <div className="meals">
            {cat.meals.map((meal) => {
              return (
                <div
                  key={meal.id}
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
                          <i className="icon-STAR_FILL"></i>
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
      )
    );
  });
};

export default Menu;
