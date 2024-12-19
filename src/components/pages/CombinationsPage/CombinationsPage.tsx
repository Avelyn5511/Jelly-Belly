import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Combination } from "../../../types/Beans.ts";
import { Loader } from "../../Loader/Loader.tsx";
import styles from "./styles.module.css";

type ApiResponse = {
  items: Combination[];
};

const Combinations: React.FC = () => {
  const [beansData, setBeansData] = useState<Combination[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBeans = async () => {
      try {
        const response: AxiosResponse<ApiResponse> = await axios.get(
          "https://jellybellywikiapi.onrender.com/api/combinations",
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
      <h1 className={styles.titleBlock}>Explore Combinations ...</h1>
      <div className={styles.container}>
        {beansData.map((item) => (
          <div
            key={`combination_item_${item.combinationId}`}
            className={styles.item}
          >
            <h3>{item.name}</h3>
            <p className={styles.description}>
              {item.tag.map((item) => item + " ")}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Combinations;
