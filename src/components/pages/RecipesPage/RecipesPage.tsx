import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Recipe } from "../../../types/Beans.ts";
import { Loader } from "../../Loader/Loader.tsx";
import styles from "./styles.module.css";

type ApiResponse = {
  items: Recipe[];
};

const Recipes: React.FC = () => {
  const [beansData, setBeansData] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBeans = async () => {
      try {
        const response: AxiosResponse<ApiResponse> = await axios.get(
          "https://jellybellywikiapi.onrender.com/api/recipes",
          { params: { pageSize: 54 } },
        );
        setBeansData(response.data.items);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        setError("Не удалось загрузить данные о бобах.");
        setLoading(false);
        console.error("Error fetching beans:", error);
      }
    };

    void fetchBeans();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main>
      <h1>Recipes...</h1>
      <div className={styles.container}>
        {beansData.map((item) => (
          <div
            key={`combination_item_${item.recipeId}`}
            className={styles.item}
          >
            <img src={item.imageUrl} alt="" className={styles.imageRecipe} />
            <div className={styles.info}>
              <h3 className={styles.title}>{item.name}</h3>
              <p className={styles.description}>
                {item.description.length > 100
                  ? item.description.slice(0, 100) + "..."
                  : item.description}
              </p>
              {item.cookTime && (
                <p className={styles.additional_info}>
                  {" "}
                  Make: {item.makingAmount}
                </p>
              )}
              {item.cookTime && (
                <p className={styles.additional_info}>
                  Cook Time: {item.cookTime}
                </p>
              )}
              {item.totalTime && (
                <p className={styles.additional_info}>
                  Total Time: {item.totalTime}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Recipes;
