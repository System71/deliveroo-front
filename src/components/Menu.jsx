import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = ({ data }) => {
  return data.categories.map((cat) => {
    return (
      <section>
        <h2>{cat.name}</h2>
        <div className="meals">
          {cat.meals.map((meal) => {
            return (
              <div className="menu-item">
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
