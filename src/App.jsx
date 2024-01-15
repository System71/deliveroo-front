import "./App.css";
import Header from "./components/HEader";
import Menu from "./components/Menu";
import RestaurantInfos from "./components/RestaurantInfos";
import { useState, useEffect } from "react";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://site--deliveroo-backend--nh2bbcwygd2q.code.run/"
        );
        setData(response.data);
      } catch (error) {
        console.log(("catch app", error.response));
      }

      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>chargement en cours</p>
  ) : (
    <div className="container">
      <Header />
      <RestaurantInfos data={data} />
      <main>
        <div className="main-container crawler  ">
          <div className="menu">
            <Menu data={data} />
          </div>
          <div className="cart"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
