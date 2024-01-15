const RestaurantInfos = ({ data }) => {
  return (
    <div className="restaurant-infos crawler">
      <div className="infos-text">
        <h1>{data.restaurant.name}</h1>
        <p>{data.restaurant.description}</p>
      </div>
      <div className="infos-picture">
        <img src={data.restaurant.picture} alt="Image du Header" />
      </div>
    </div>
  );
};

export default RestaurantInfos;
